module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inconsolata-Regular', 'sans-serif'],
      heading: ['Inconsolata-Bold', 'sans-serif'],
      light: ['Inconsolata-ExtraLight', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          background: '#11081f',
          primary: '#006ac1',
          secondary: '#7026b9',
          gatsby: '#663399',
          rive: '#d041ab',
        },
      },
    },
  },
  plugins: [],
}
