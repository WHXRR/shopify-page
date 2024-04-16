/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        layout: '#f4f5f7',
        'input-gray': '#ebefff',
      },
      minWidth: {
        1208: '1208px',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
