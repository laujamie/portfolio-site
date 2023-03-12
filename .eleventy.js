const moment = require("moment");
const Terser = require("terser");
const htmlmin = require("html-minifier");

moment.locale("en");

now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("src/website/admin/config.yml");

  eleventyConfig.addNunjucksAsyncFilter("jsmin", async (code, callback) => {
    try {
      const minified = await Terser.minify(code);
      return callback(null, minified.code);
    } catch (err) {
      console.error("Error during terser minify:", err);
      return callback(err, code);
    }
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addFilter("dateIso", (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return moment(date).utc().format("LL");
  });

  eleventyConfig.addFilter("arrayToString", (arr) => {
    return arr.join(",");
  });

  eleventyConfig.addShortcode("version", () => now);

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  return {
    dir: { input: "src/website", output: "_site" },
  };
};
