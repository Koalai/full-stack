/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #6dd5ed, #2193b0)'
      }
    },
  },
  plugins: [],
}

