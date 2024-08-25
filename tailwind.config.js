/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#4169E1',
        'midnight-blue': '#141c3a'
      },

      animation: {
        'smooth-up-down': 'smooth-up-down 8s ease-in-out infinite',
      },
      keyframes: {
        'smooth-up-down': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15px)', /* Ajuste a altura conforme necessário */
          },
        },
      },
    },
  },
  plugins: [],
}
