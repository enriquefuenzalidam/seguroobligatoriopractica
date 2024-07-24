const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
              'custom-opacity': '0px 0px 0px 0px rgba(0, 0, 0, 0) , 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 6px 8px -2px rgba(0, 0, 0, 0.1)',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: [ ...defaultTheme.fontFamily.sans],
                Lato: ['Lato', ...defaultTheme.fontFamily.sans],
                Inter: ['Inter', ...defaultTheme.fontFamily.sans],
                Poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
