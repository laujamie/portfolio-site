const moment = require("moment");
const Terser = require("terser");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const outdent = require("outdent");

const site = require("./src/website/_data/site");

moment.locale("en");

now = String(Date.now());

/** Maps a config of attribute-value pairs to an HTML string
 * representing those same attribute-value pairs.
 */
const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === "undefined") return "";
      return `${attribute}="${value}"`;
    })
    .join(" ");
};

const cleanFilePath = (src) => {
  return src.replace(/^\/+/g, "");
};

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) => {
  const cleanSrc = cleanFilePath(src);
  const imageMetadata = await Image(cleanSrc, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/assets/images",
    urlPath: "/assets/images",
  });

  const sourceHtmlString = Object.values(imageMetadata)
    // Map each format to the source HTML markup
    .map((images) => {
      // The first entry is representative of all the others
      // since they each have the same shape
      const { sourceType } = images[0];

      // Use our util from earlier to make our lives easier
      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        // srcset needs to be a comma-separated attribute
        srcset: images.map((image) => image.srcset).join(", "),
        sizes,
        class: className,
      });

      // Return one <source> per format
      return `<source ${sourceAttributes}>`;
    })
    .join("\n");

  const getLargestImage = (format) => {
    const images = imageMetadata[format];
    return images[images.length - 1];
  };

  const largestUnoptimizedImg = getLargestImage(formats[0]);
  const imgAttributes = stringifyAttributes({
    src: largestUnoptimizedImg.url,
    width: largestUnoptimizedImg.width,
    height: largestUnoptimizedImg.height,
    alt,
    loading: "lazy",
    decoding: "async",
    class: className,
  });
  const imgHtmlString = `<img ${imgAttributes}>`;

  const pictureAttributes = stringifyAttributes({
    class: className,
  });
  const picture = `<picture ${pictureAttributes}>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

  return outdent`${picture}`;
};

/**
 * Prefixes the given URL with the site's base URL.
 * @param {string} url
 */
const toAbsoluteUrl = (url) => {
  return new URL(url, site.baseUrl).href;
};

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

  eleventyConfig.addFilter("toAbsoluteUrl", toAbsoluteUrl);

  eleventyConfig.addShortcode("version", () => now);

  eleventyConfig.addShortcode("image", imageShortcode);

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });

  return {
    dir: { input: "src/website", output: "_site" },
  };
};
