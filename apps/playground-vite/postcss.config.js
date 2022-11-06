const config = require("tailwind-config/tailwind.config.js");

module.exports = {
  plugins: {
    tailwindcss: { config: { ...config, darkMode: "class" } },
    autoprefixer: {},
  },
};
