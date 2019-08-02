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
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      green: '#29CB7E',
      pink: '#FFCAD4',
      orange: '#FEBD93',
      blue: '#BDE8FF',
      purple: '#CCBCFF',
      yellow: '#FFEC97',
      grey: {
        default: '#E7E1DC',
        dark: '#9D938E'
      }
    },
    extend: {
      spacing: {
        '2vw': '2vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '7-5vw': '7.5vw'
      }
    }
  },
  corePlugins: {},
  variants: {},
  plugins: []
};
