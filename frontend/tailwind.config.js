/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

