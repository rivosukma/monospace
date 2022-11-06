/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["space-ui"]);

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
