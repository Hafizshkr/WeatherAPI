/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shareTech: ["Share Tech Mono", "monospace"]
      },
      colors: {
        'yellow' : '#D5F318'
      }
    },
  },
  plugins: [],
}