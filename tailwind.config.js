/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      }, //background-color ==> backgroundColor
      backgroundImage: {
        "gradient-orange-pink" : "linear-gradient(to left, #FC8E51, #FA61F9)",
      },
      //padding: {
      //  "3o": "3px"
      //},
      backgroundColor: {
        "blue-main": "#151937",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
