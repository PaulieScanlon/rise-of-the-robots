module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['button-primary', 'button-secondary', 'button-ghost'],
  theme: {
    fontFamily: {
      sans: ['Inconsolata-Regular', 'sans-serif'],
      heading: ['Inconsolata-Bold', 'sans-serif'],
      bold: ['Inconsolata-Bold', 'sans-serif'],
      light: ['Inconsolata-Light', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          background: '#1B0C24',
          primary: '#00FF00',
          secondary: '#FB74D6',
          tertiary: '#342f70',
          gray: '#eee2e3',
          error: '#ff0000',
        },
      },
      maxWidth: {
        section: '748px',
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
