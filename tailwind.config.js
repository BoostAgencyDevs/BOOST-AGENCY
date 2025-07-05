/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Paleta de colores exacta de influur.com
        primary: {
          50: '#FFA8A8',
          100: '#FF8787', 
          200: '#FF6B6B', // Color tomate elegante principal
          300: '#FF6B6B',
          400: '#FF6B6B',
          500: '#FF6B6B', // Color principal
          600: '#E55555',
          700: '#CC4444',
          800: '#B33333',
          900: '#992222'
        },
        // Colores exactos según especificación
        accent: '#f05f02',        // Color tomate elegante
        'accent-light': '#f05f02', // Tono más claro
        'accent-lighter': '#f05f02', // Tono aún más claro
        'text-primary': '#FFFFFF',    // Blanco puro
        'text-secondary': '#CCCCCC',  // Gris claro para textos secundarios
        'bg-primary': '#000000',      // Negro puro para fondo
        // Colores de fondo y texto
        dark: {
          50: '#CCCCCC',   // Texto secundario
          100: '#FFFFFF',  // Texto principal (blanco puro)
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#FFFFFF',
          700: '#FFFFFF',
          800: '#000000',  // Fondo principal (negro puro)
          900: '#000000',
          950: '#000000'
        },
        light: {
          50: '#FFFFFF',   // Blanco puro
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#CCCCCC',  // Texto secundario
          400: '#CCCCCC',
          500: '#CCCCCC',
          600: '#CCCCCC',
          700: '#CCCCCC',
          800: '#CCCCCC',
          900: '#CCCCCC',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'bounce-soft': 'bounceSoft 2s infinite',
        'zoom-in': 'zoom-in 0.8s ease-out forwards',
        'entrance': 'entrance 1s ease-out',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'bounce-x': 'bounce-x 1s infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        bounceSoft: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        entrance: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 107, 107, 0.3)',
        'glow-lg': '0 0 30px rgba(255, 107, 107, 0.4)',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'dark-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};
