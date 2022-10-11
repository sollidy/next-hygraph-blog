const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.5: '0.12rem',
      },
      fontSize: {
        '2lg': '1.38rem',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        fade: 'fade .5s ease-in-out',
      },
    },
  },
  plugins: [
    plugin(({ theme, addComponents, addUtilities }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: '#ff0009',
          color: '#fff',
          borderRadius: '0.65rem',
          transition: 'background-color .3s ease-in-out',
          '&:hover': {
            backgroundColor: '#ff0009',
          },
        },
      }),
        addUtilities({
          '.outline-border-none': {
            outline: 'none',
            border: 'none',
          },
          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        })
    }),
  ],
}
