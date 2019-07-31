module.exports = {
  theme: {
    fontFamily: {
      sans: ['NetlifeSans'],
      lining: ['NetlifeLining']
    },
    fontSize: {
      base: '1rem',
      lg: '1.5rem',
      xl: '2.4rem'
    },
    screens: {
      sm: '32rem',
      md: '44rem',
      lg: '52rem',
      xl: '56rem'
    },

    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '2048px'
      },
      spacing: {
        '5vw': '5vw',
        '7-5vw': '7.5vw'
      }
    }
  },
  variants: {},
  corePlugins: {},
  plugins: []
};
