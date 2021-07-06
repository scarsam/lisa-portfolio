const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        "black-1": "#010101",
        "copy-1": "#525252",
        "copy-link": "#8393C1",
      },
      fontFamily: {
        sans: ["Chivo", ...defaultTheme.fontFamily.sans],
        link: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: { gridColumn: ["last", "first"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
