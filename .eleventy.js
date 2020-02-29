const fs = require("fs")
const Terser = require("terser")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy("assets")

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync("_site/404.html")

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          // Add 404 http status code in request header.
          // res.writeHead(404, { "Content-Type": "text/html" });
          res.writeHead(404)
          res.end()
        })
      },
    },
  })

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code)
    if (minified.error) {
      console.log("Terser error: ", minfied.error)
      return code
    }

    return minified.code
  })
}
