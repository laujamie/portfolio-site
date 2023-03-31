const IS_DEV = process.env.ELEVENTY_ENV === "development";

const baseUrl = IS_DEV ? "http://localhost:3000" : "https://jamielau.me";

module.exports = {
  title: "Jamie Lau",
  baseUrl,
  description:
    "Jamie Lau is a software engineer currently working as a software engineer at Embark Trucks, " +
    "who is currently helping to build out self-driving trucks.",
  env: process.env.ELEVENTY_ENV === "production",
  linkedin: "https://linkedin.com/in/laujamie5",
  github: "https://github.com/laujamie",
  year: new Date().getFullYear(),
};
