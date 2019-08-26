const responsiveFont = (minFontSize, maxFontSize, minWidth, maxWidth) => ({
  fontSize: `${minFontSize}px`,
  [`@media (min-width: ${minWidth}px)`]: {
    fontSize: `calc(${minFontSize}px + ${maxFontSize -
      minFontSize} * ((100vw - ${minWidth}px) / ${maxWidth - minWidth}))`
  },
  [`@media (min-width: ${maxWidth}px)`]: {
    fontSize: `${maxFontSize}px`
  }
});

module.exports = {
  theme: {
    borderRadius: {
      none: '0',
      full: '9999px'
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
        light: '#F8F7F5',
        default: '#E7E1DC',
        dark: '#9D938E'
      },
      smoke: 'rgba(0,0,0,0.4)'
    },
    fontFamily: {
      sans: ['NetlifeSans'],
      lining: ['NetlifeLining']
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    },
    screens: {
      sm: '32rem',
      md: '44rem',
      lg: '52rem',
      xl: '56rem'
    },

    extend: {
      spacing: {
        '2vw': '2vw',
        '2-5vw': '2.5vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '7-5vw': '7.5vw'
      },
      lineHeight: {
        'extra-none': 0.75
      }
    }
  },
  corePlugins: {
    fontSize: false
  },
  variants: {
    backgroundColor: ['focus'],
    fontWeight: ['responsive']
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-base': responsiveFont(18, 36.25, 1152, 2256),
        '.text-lg': responsiveFont(26, 58, 1040, 2320),
        '.text-xl': responsiveFont(42, 116, 934, 2560)
      };

      addUtilities(newUtilities, {
        variants: ['responsive']
      });
    }
  ]
};
