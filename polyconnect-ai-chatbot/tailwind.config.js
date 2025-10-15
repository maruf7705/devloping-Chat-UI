/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E1117',
        surface: '#161B22',
        accent: '#00D1FF',
        'secondary-accent': '#3BE8B0',
        'muted-text': '#9BA3AF',
        text: '#E6EDF3',
        error: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}