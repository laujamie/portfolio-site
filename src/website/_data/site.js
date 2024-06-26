const IS_DEV = process.env.ELEVENTY_ENV === "development";

const baseUrl = IS_DEV ? "http://localhost:3000" : "https://jamielau.me";

module.exports = {
  title: "Jamie Lau",
  baseUrl,
  description:
    "Jamie Lau is a software engineer, based in Toronto, Canada, working on giving small businesses delivery superpowers at Roundtrip. " +
    "Jamie specializes in developing full-stack web applications using Go, React, TypeScript, Python, and PostgreSQL.",
  env: process.env.ELEVENTY_ENV === "production",
  linkedin: "https://linkedin.com/in/laujamie5",
  github: "https://github.com/laujamie",
  year: new Date().getFullYear(),
  turnstileKey: "0x4AAAAAAADxOPVPZHY1vE2x",
};
