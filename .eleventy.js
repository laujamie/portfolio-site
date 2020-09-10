const moment = require('moment');
const Terser = require('terser');
const htmlmin = require('html-minifier');

moment.locale('en');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/website/static');
  eleventyConfig.addPassthroughCopy('src/website/admin/config.yml');

  eleventyConfig.addNunjucksAsyncFilter('jsmin', async (code, callback) => {
    try {
      const minified = await Terser.minify(code);
      return callback(null, minified.code);
    } catch (err) {
      console.error('Error during terser minify:', err);
      return callback(err, code);
    }
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addFilter('dateIso', (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', (date) => {
    return moment(date).utc().format('LL');
  });

  return {
    dir: { input: 'src/website', output: '_site' },
  };
};
