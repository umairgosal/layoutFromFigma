/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

const daisyui = require('daisyui')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: ['Montserrat'],
        dmSans: ['DM Sans']
      }
    },
  },

  daisyui: {
    themes: true,
  },

  plugins: [daisyui,
  ],
}

