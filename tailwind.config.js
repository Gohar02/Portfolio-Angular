/** @type {import('tailwindcss').Config} */
 
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#8B5CF6',
      secondary: colors.yellow,
      neutral: colors.gray,
    }
  },
  plugins: [],
};
