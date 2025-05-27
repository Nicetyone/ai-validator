module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        }
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
          '33%': {
            transform: 'scale(1.1) translate(30px, -50px)',
          },
          '66%': {
            transform: 'scale(0.9) translate(-20px, 20px)',
          },
          '100%': {
            transform: 'scale(1) translate(0px, 0px)',
          },
        },
      },
    }
  }
}
