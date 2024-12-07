const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-opacity': '0px 0px 0px 0px rgba(0, 0, 0, 0) , 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 6px 8px -2px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        neutral: colors.neutral
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        Lato: ['Lato', ...defaultTheme.fontFamily.sans],
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      maskImage: {
        'none': 'none',
        'url': 'url("/images/preciosMask.svg")',
      },
      maskRepeat: {
        'no-repeat': 'no-repeat',
        'repeat': 'repeat',
      },
      maskSize: {
        'cover': 'cover',
        'contain': 'contain',
      },
      maskPosition: {
        'center': 'center',
        'top': 'top',
        'right': 'right',
        'bottom': 'bottom',
        'left': 'left',
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.mask-image-none': {
          'mask-image': 'none',
          '-webkit-mask-image': 'none',
        },
        '.mask-image-url': {
          'mask-image': 'url("/images/preciosMask.svg")',
          '-webkit-mask-image': 'url("/images/preciosMask.svg")',
        },
        '.mask-repeat-no': {
          'mask-repeat': 'no-repeat',
          '-webkit-mask-repeat': 'no-repeat',
        },
        '.mask-size-cover': {
          'mask-size': 'cover',
          '-webkit-mask-size': 'cover',
        },
        '.mask-position-center': {
          'mask-position': 'center',
          '-webkit-mask-position': 'center',
        },
        '.mask-position-top': {
          'mask-position': 'top',
          '-webkit-mask-position': 'top',
        },
        '.mask-position-right': {
          'mask-position': 'right',
          '-webkit-mask-position': 'right',
        },
        '.mask-position-bottom': {
          'mask-position': 'bottom',
          '-webkit-mask-position': 'bottom',
        },
        '.mask-position-left': {
          'mask-position': 'left',
          '-webkit-mask-position': 'left',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ]
};
