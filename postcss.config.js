const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.ELEVENTY_ENV === 'production'
      ? purgecss({
          content: ['./**/*.html', './**/*.njk'],
        })
      : null,
  ],
};
