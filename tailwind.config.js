/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
        fontSize: {
            'xs' : '0.6rem'
        },

        colors: {
            primary: "#1E51DE",
            secondary: "#000024",

        },
        fontFamily:{
            fira: ["Fira Sans", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        }
    },
  },
  plugins: [],
}