/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        "bj-green": "rgba(0,104,40,1)",
        "bj-yellow": "rgba(255,190,0,1)",
        "bj-red": "rgba(235,0,0,1)",
        "finance-gray": "#f2f2f2",
        "finance-blue": "#0E406E",
        "finance-plot": "#283344",
        "finance-late": "#484848",
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('tailwindcss-fluid'),
  ],
}

