const moment = require('moment');

moment.locale('en');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/static');
  eleventyConfig.addPassthroughCopy('src/admin/config.yml');

  eleventyConfig.addFilter('dateIso', (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter('dateReadable', (date) => {
    return moment(date).utc().format('LL');
  });

  return {
    dir: { input: 'src', output: '_site' },
  };
};
