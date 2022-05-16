/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    colors: {
      "primary-500": "#ffb703",
      "secondary-800": "#023047",
      "secondary-50": "#8ecae6",
    },
    fontFamily: {
      mono: ["Share Tech Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      dropShadow: {
        bold: "2px 2px #023047",
      },
    },
  },
  plugins: [],
};
