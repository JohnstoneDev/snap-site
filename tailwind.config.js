/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'Almost-White': 'hsl(0, 0%, 98%)',
      'Medium-Gray': 'hsl(0, 0%, 41%)',
      'Almost-Black': 'hsl(0, 0%, 8%)'
    },
    screens : {
      'Mobile': '375px',
      'Desktop': '1440px'
    },
    fontSize : {
      'all' : '18px',
      'big' : '80px'
    },
    extend: {
      gridTemplateColumns : {
        '2' :'repeat(2,500px)'
      }
    },
  },
  plugins: [],
}
