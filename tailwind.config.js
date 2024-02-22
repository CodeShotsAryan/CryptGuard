/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'logo-color': "#8532fa"
      },
      width:{
        'text1-width':"500px"
      }
    },
  },
  plugins: [],
}

