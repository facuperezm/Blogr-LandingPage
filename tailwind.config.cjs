/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", ...defaultTheme.fontFamily.sans],
        ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-red": "var(--light-red)",
        "very-light-red": "var(--very-light-red)",
        "very-dark-blue": "var(--very-dark-blue)",
        "white-color": "var(--white)",
        "grayish-blue": "var(--grayish-blue)",
        "very-dark-grayish-blue": "var(--very-dark-grayish-blue)",
        "very-light-red": "var(--very-light-red)",
        "light-red": "var(--light-red)",
        "very-dark-gray-blue": "var(--very-dark-gray-blue)",
        "very-dark-desaturated-blue": "var(--very-dark-desaturated-blue)",
      },
    },
  },
  plugins: [],
};
