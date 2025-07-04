/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this line is present and correct
  ],
  theme: {
    extend: {
      // You can add custom Tailwind configurations here if needed
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define 'Inter' font family
      },
      keyframes: {
        fadeInFromBottom: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInFromBottom 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}