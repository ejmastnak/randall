/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    screens: {
      'xxxxs': '300px',
      'xxxs': '410px',
      'xxs': '475px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        orange: {
          950: '#431407',
        },
      }
    },
  },
  plugins: [forms],
}

