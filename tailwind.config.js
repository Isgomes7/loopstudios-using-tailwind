/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    screens: {
      'mobile': '768px',
      'desktop': '1280px',
    },
    minHeight: {
      'big': '800px',
    },
    fontSize: {
      'large': '40px',
      'big': '70px',
      'trim': '30px',
    },
    extend: {
      spacing: {
        'gap': '10px',
        'trim': '30px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '160px',
        'negative-big': '-160px',
        '0-auto' : '0 auto',
        'top-auto' : '50px auto 0',
      },
      maxWidth: {
        '1': '700px',
        '2': '150px',
      },
      minHeight: {
        '1': '50px',
      },
      transitionDuration: {
        '300': '300ms'
      },
      gridTemplateColumns: {
        'auto': 'auto auto auto auto',
        '2-auto': 'auto auto',
      },
    },
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Alata', 'serif'],
    },
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 55%)',
      'very-dark-gray': 'hsl(0, 0%, 41%)',
      'opacity': 'rgba(255, 255, 255, .5)'
    },
  },
  plugins: [],
}

