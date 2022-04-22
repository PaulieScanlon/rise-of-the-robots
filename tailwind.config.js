module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['button-gatsby-primary', 'button-gatsby-secondary'],
  theme: {
    fontFamily: {
      sans: ['Inconsolata-Regular', 'sans-serif'],
      heading: ['Inconsolata-Bold', 'sans-serif'],
      bold: ['Inconsolata-Bold', 'sans-serif'],
      light: ['Inconsolata-ExtraLight', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          background: '#11081f',
          primary: '#2ca72c',
          secondary: '#7026b9',
          gatsby: '#663399',
          rive: '#d041ab',
          gray: '#b7b5bc',
          link: '#a456f0',
        },
      },
      gridTemplateColumns: {
        ['auto-auto']: 'auto auto',
        ['auto-1fr']: 'auto 1fr',
        ['1fr-auto']: '1fr auto',
      },
    },
  },
  plugins: [],
}
