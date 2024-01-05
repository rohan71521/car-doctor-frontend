/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'theme-color': '#FF3811',
      'second-color':'#151515',
      'third-color':'#fff'
    },
    extend: {}
  },
  plugins: [require("daisyui")],
}

