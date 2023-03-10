module.exports = {
  content: [
    "./src/website/_includes/**/*.{html,md,11ty.js,njk}",
    "./src/website/admin/**/*.{html,md,11ty.js,njk}",
    "./src/website/blog/**/*.{html,md,11ty.js,njk}",
    "./src/website/projects/**/*.{html,md,11ty.js,njk}",
    "./src/website/*.{html,md,11ty.js,njk}",
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
