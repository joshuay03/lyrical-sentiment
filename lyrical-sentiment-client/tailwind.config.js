module.exports = {
  purge: [
    './src/**/*.html',
    './src/*.vue',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        form: '30rem',
      },
    },
    fontFamily: {
      VarelaRound: ['Varela Round', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
