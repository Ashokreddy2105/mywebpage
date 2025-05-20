/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#537D5D',    // Dark green
        secondary: '#73946B',  // Accent green
        tertiary: '#9EBC8A',   // Soft pastel
        background: '#D2D0A0', // Sand
        dark: '#2D3E4E',       // Dark text color
        light: '#FFFFFF',      // Light text color
        success: '#4CAF50',    // Success color
        warning: '#FFC107',    // Warning color 
        error: '#F44336',      // Error color
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'typing': 'typing 0.5s steps(30, end)',
        'blink': 'blink 1s step-end infinite',
        'fadeIn': 'fadeIn 1s ease-in-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'expand': 'expand 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        expand: {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: 'auto', opacity: '1' },
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      zIndex: {
        '-10': '-10',
        '100': '100',
      }
    },
  },
  plugins: [],
};