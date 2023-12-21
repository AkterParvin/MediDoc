/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        "bg-light": "#F9F9F9",
        "pink":'rgba(255, 117, 148, 1)',
        "text-color": "#2E1619",
        "subtitle": "rgba(74, 61, 63, 1)",
        "dark-green": "rgba(3, 146, 43, 1)",
        "light-green":"rgba(130, 171, 13, 1)",
        "ash": "#263238",
        "light-ash": "rgba(224, 224, 224, 1)",
        'pink-gradient-start': 'rgba(255, 117, 148, 1)',
        'pink-gradient-end': 'rgba(255, 124, 101, 1)',

        "dark-bg": "#150A09", 
        "dark-nav-bg":"#2E1619",
        "dark-text-color": "#FFFFFF",
      },
    
    },
  },

  plugins: [require("daisyui")],
 
}

