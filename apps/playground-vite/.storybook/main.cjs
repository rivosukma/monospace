const path = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          {
            find: "space-ui",
            replacement: path.resolve(__dirname, "../../../packages/space-ui/"),
          },
        ],
      },
    });
  },
};

// builder-vite not compatible yet with addons
// optimizeDeps: {
//   include: ["storybook-dark-mode"],
// },

// config for postcss
// {
//   name: "@storybook/addon-postcss",
//   options: {
//     cssLoaderOptions: {
//       // When you have splitted your css over multiple files
//       // and use @import('./other-styles.css')
//       importLoaders: 1,
//     },
//     postcssLoaderOptions: {
//       // When using postCSS 8
//       implementation: require("postcss"),
//     },
//   },
// },
