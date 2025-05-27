module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8'
        },
        accent: {
          primary: '#8b5cf6',
          secondary: '#ec4899',
          tertiary: '#0ea5e9',
          quaternary: '#f59e0b'
        },
        surface: {
          light: '#ffffff',
          dark: '#111827',
          'light-hover': '#f9fafb',
          'dark-hover': '#1f2937'
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        'slow-pulse': 'slow-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slow-float': 'slow-float 12s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
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
        'slow-pulse': {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.3',
            transform: 'scale(0.95)'
          }
        },
        'slow-float': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)'
          },
          '50%': {
            transform: 'translateY(-20px) scale(1.05)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-angular': 'conic-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
        'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'soft-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        glow: '0 0 15px rgba(99, 102, 241, 0.5)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-pink': '0 0 15px rgba(236, 72, 153, 0.5)',
        'glow-blue': '0 0 15px rgba(14, 165, 233, 0.5)',
      }
    }
  }
}
