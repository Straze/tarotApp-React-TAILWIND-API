/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
    },
     borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'md': '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
     screens: {
      sm: '320px',
      md: '700px',
      lg: '800px',
      xl: '1500px',
      '2xl': '1680px',
    },
    extend: {
      boxShadow: {
        'navShadow':"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      },
      animation: {
        fade: 'fadeOut 2s ease-in-out',
        fadeRight: 'fadeRight 1s ease-in-out',
        fadeLeft: 'fadeLeft 1s ease-in-out',
        fadeTop: 'fadeTop 0.5s ease-in-out',
        fadeBottom: 'fadeBottom 2s ease-in-out',
        float:'float 10s linear infinite',
      },
      keyframes: {
        'fadeOut': {
          '0%': { opacity:'0' },
          '100%': { opacity: '1'}, 
        },
        'fadeRight': {
          '0%': { 
            opacity:'0',
            transform: 'translateX(5rem)'
        },
          '50%':{
            opacity:'0.2',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0rem)'
          }, 
        },
        'fadeLeft': {
          '0%': { 
            opacity:'0',
            transform: 'translateX(-3rem)'
        },
          '50%':{
            opacity:'0.2',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0rem)'
          }, 
        },
        'fadeTop': {
          '0%': { 
            opacity:'0',
            transform: 'translateY(-3rem)'
        },
          '50%':{
            opacity:'0.2',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0rem)'
          }, 
        },
        'fadeBottom': {
          '0%': { 
            opacity:'0',
            transform: 'translateY(3rem)'
        },
          '50%':{
            opacity:'0.2',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0rem)'
          } 
        },
        'float': {
          '0%': { 
            transform: 'translateY(2rem)'
        },
          '10%':{
            transform: 'translateY(1rem)'
          },
          '20%': { 
            transform: 'translateY(3rem)'
          },
          '30%': {
            transform: 'translateY(2rem)'
          },
          '40%': {
            transform: 'translateY(3rem)'
          },
          '50%':{
            transform: 'translateY(2rem)'
          },
          '60%':{
            transform: 'translateY(3rem)'
          },
          '70%':{
            transform: 'translateY(2rem)'
          },
          '80%':{
            transform: 'translateY(1rem)'
          },
          '90%':{
            transform: 'translateY(2rem)'
          },
          '100%':{
            transform: 'translateY(2rem)'
          },
        }
      },
      skew: {
        '90':'180deg',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#ff4800",
      },
    },
  },
  plugins: []
}

