/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'woodsmoke-950': '#141414',
        'mountain-mist-400': '#979797',
        'raw-sienna-500': '#d87d4a'
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: '56px',
          textTransform: 'uppercase',
          lineHeight: '58px',
          letterSpacing: '2px',
          fontWeight: 'bold'
        },
        'h2': {
          fontSize: '40px',
          textTransform: 'uppercase',
          lineHeight: '44px',
          letterSpacing: '1.5px',
          fontWeight: 'bold'
        },
        'h3': {
          fontSize: '32px',
          textTransform: 'uppercase',
          lineHeight: '36px',
          letterSpacing: '1.15px',
          fontWeight: 'bold'
        },
        'h4': {
          fontSize: '28px',
          textTransform: 'uppercase',
          lineHeight: '38px',
          letterSpacing: '2px',
          fontWeight: 'bold'
        },
        'h5': {
          fontSize: '24px',
          textTransform: 'uppercase',
          lineHeight: '33px',
          letterSpacing: '1.7px',
          fontWeight: 'bold'
        },
        'h6': {
          fontSize: '18px',
          textTransform: 'uppercase',
          lineHeight: '24px',
          letterSpacing: '1.3px',
          fontWeight: 'bold'
        },
        'p': {
          fontSize: '15px',
          lineHeight: '25px',
        }
      })
    })
  ]
}

