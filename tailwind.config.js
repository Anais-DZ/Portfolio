/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          customDark: '#02121F',
          customDarkHover: '#031a2e',
          primary: {
            DEFAULT: '#F62E8E',
            hover: '#D91875',
          },
          secondary: {
            DEFAULT: '#AC1AF0',
            hover: '#8E14C4',
          },
        },
        fontFamily: {
          sans: ['Hanken Grotesk', 'sans-serif'],
        },
      },
    },
    plugins: [
        require('tailwind-hamburgers')
    ],
    important: true,
  };
  