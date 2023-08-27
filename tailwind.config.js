/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#155e75',
      },
      width: {
        '90p': '90%',
      },
      backgroundColor: {
        'rgb-255-255-255': 'rgb(255, 255, 255)',
      },
    },
  },
  plugins: [],
}

