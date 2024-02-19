/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          soft:"rgb(254 204 57)",
          dark:"rgb(255 179 0)"
        }
      }
    },
  },
  plugins: [],
}

