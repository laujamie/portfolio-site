const fs = require("fs")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css")
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
  return {
    dir: { input: "src", output: "_site" },
  }
}
