/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'logo-color': "#8532fa",
        'bg-color1' : "#f5fcff"
      },
      width:{
        'text1-width':"500px",
        // 'text2-width' : "500px"
      },
      height:{
        'custom-height1' : "500px"
      },
      screens:{
        'media-1' : {'max' : "975px"}
      }
    },
  },
  plugins: [],
}

