import "../src/styles/globals.css";
import "../src/styles/storybook.css";

export const globalTypes = {
  darkMode: true,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
