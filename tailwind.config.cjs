/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: '#918599',
      'gray-semi-light': '#C3BCC7',
      'gray-light': '#F5F5F5',
      'gray-semi-dark': '#5D5464',
      'gray-dark': '#29252C',
      

      green: '#7BD389', 
      'green-light': '#38E4AE',

      blue: '#0B3D91',
      'blue-semi-light': '#1056D1',
      'blue-light': '#7AA7F5',

      red: '#FF4747',
    },
    fontSize: {
      sm: 16,
      md: 18,
      lg: 20,
      xl: 32,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
