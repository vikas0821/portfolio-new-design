/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#FAF8F1'
        },
        cream: {
          200: '#FAEAB1'
        },
        darkcream: {
          400: '#E5BA73'
        },
        extradarkcream: {
          800: '#C58940'
        }
      }
    },
  },
  plugins: [],
}
