module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'small': '295px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
