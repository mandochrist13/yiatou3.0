/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/styles/custom.css",
  ],
  theme: {
    extend: {
      colors : {
        "main-button" : "#FF5722",
        "background" : "#FFE5AF",
        "background-f" : "#FFF",
        'temu-green': '#00A650',
      },
      fontFamily : {
        'klavika-bold' : ['klavika-bold','sans-serif'],
        'klavika-bold-italic' : ['klavika-bold-italic','sans-serif'],
        'klavika-light-italic' : ['klavika-light-italic','sans-serif'],
        'klavika-light' : ['klavika-light','sans-serif'],
        'klavika-medium-italic' : ['klavika-medium-italic','sans-serif'],
        'klavika-medium' : ['klavika-medium','sans-serif'],
        'klavika-medium-regular' : ['klavika-medium-regular','sans-serif'],
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
        'scale-up': 'scale-up 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    themes: [
      {
        light: {
        },
      },
    ]
  },
  corePlugins: {
    // ... autres core plugins
  },
}
