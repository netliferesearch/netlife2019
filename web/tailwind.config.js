const responsiveFont = (minFontSize, maxFontSize, minWidth, maxWidth) => ({
  fontSize: `${minFontSize}px`,
  [`@media (min-width: ${minWidth}px)`]: {
    fontSize: `calc(${minFontSize}px + ${maxFontSize -
      minFontSize} * ((100vw - ${minWidth}px) / ${maxWidth - minWidth}))`
  },
  [`@media (min-width: ${maxWidth}px)`]: {
    fontSize: `${maxFontSize}px`
  },
  lineHeight: '1.25'
});

module.exports = {
  theme: {
    borderRadius: {
      none: '0',
      full: '9999px'
    },
    borderWidth: {
      default: '2px',
      '0': '0'
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      green: {
        default: '#29CB7E',
        dark: '#2aa96d'
      },
      pink: '#FFCAD4',
      orange: '#FEBD93',
      gridOverlay: 'rgba(253, 121, 33, 0.2)',
      blue: '#BDE8FF',
      purple: '#CCBCFF',
      yellow: '#FFEC97',
      red: '#cb3f29',
      grey: {
        light: '#F8F7F5',
        default: '#E7E1DC',
        dark: '#9D938E'
      },
      smoke: 'rgba(0,0,0,0.4)',
      transparent: 'transparent'
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer'
    },
    fontFamily: {
      sans: ['NetlifeSans'],
      lining: ['NetlifeLining']
    },
    fontWeight: {
      normal: '400',
      bold: '700'
    },
    inset: {
      '1': '0.25rem',
      '2': '0.5rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-4': '-1rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem'
    },
    lineHeight: {
      normal: 1.5,
      'extra-none': 0.75
    },
    screens: {
      sm: '32rem',
      md: '44rem',
      lg: '52rem',
      xl: '56rem'
    },
    boxShadow: {
      outline: '0 0 0 3px black'
    },

    extend: {
      spacing: {
        // WIP - merge some of these values (2,4,7?)
        '2vw': '2vw', // unused
        '2-5vw': '2.5vw', // unused
        '4vw': '4vw',
        '5vw': '5vw',
        '7-5vw': '7.5vw' // unused
      },
      margin: {
        '-px-2': '-2px'
      }
    }
  },
  corePlugins: {
    fontSize: false,
    opacity: false
  },
  variants: {
    borderWidth: ['responsive']
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-xs': responsiveFont(12, 24, 1152, 2256),
        '.text-sml': responsiveFont(18, 36.25, 1152, 2256), // former 'text-base'
        '.text-md': responsiveFont(26, 58, 1040, 2320), // former 'text-lg'
        '.text-lg': responsiveFont(42, 116, 934, 2560) // former 'text-xl'
      };

      addUtilities(newUtilities, {
        variants: ['responsive']
      });
    }
  ]
};
