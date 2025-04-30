/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
      },
      colors: {
        'navy': {
          800: '#0f1c3a',
          900: '#091328',
          950: '#050a17'
        },
        'gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#cfaa4a',
        }
      },
      boxShadow: {
        'gold': '0 4px 20px -2px rgba(207, 170, 74, 0.25)',
        'gold-sm': '0 2px 10px -2px rgba(207, 170, 74, 0.2)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};