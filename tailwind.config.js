module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {        
      backgroundImage: {
      'test': "url('img/bg1.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
