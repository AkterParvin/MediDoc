/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-light": "#F9F9F9",
        "pink":'rgba(255, 117, 148, 1)',
        "text-color": "rgba(46, 22, 25, 1)",
        "subtitle": "rgba(74, 61, 63, 1)",
        "dark-green": "rgba(3, 146, 43, 1)",
        "light-green":"rgba(130, 171, 13, 1)",
        "ash": "rgba(138, 134, 134, 1)",
        "light-ash":"rgba(224, 224, 224, 1)"
      }
    },
  },
  plugins: [require("daisyui")],
}

