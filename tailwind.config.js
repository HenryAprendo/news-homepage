/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
    colors: {
      'soft-orange': '#E9AB53',
      'soft-red': '#F15E50',

      'off-white': '#FFFDFA',
      'grayish-blue': '#C5C6CE',
      'dark-grayish-blue': '#5D5F79',
      'very-dark-blue': '#00001A',
    },
    fontFamily: {
      serif: ['Inter', 'sans-serif']
    },
    theme: {
      screen: {
        'sm': '640px',

        'md': '768px',

        'lg': '1024px',

        'xl': '1280px',

        '2xl': '1440px',
      }
    }
  },
  plugins: [],
}

