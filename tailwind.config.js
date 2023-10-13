module.exports = {
  content: ["./src/pages/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#111111',
        'light-gray': '#090B0C',
        'green-gray': '#070D0A',
        'spotify': '#1DB954',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch