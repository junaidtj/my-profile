/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bounce:
        "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubiBezier:"slideUp is cubic-bezier(0.165, 0.84, 0.44. 1)",
      },
      keyframes:{
        bounce:{
          from:{transform: "translatey(10px)"},
          to:{transform:"translatey(0)"},
        },
        slideUp:{
          from:{transform:"translateY(100%)"},
          to:{transform:"translateY(0)"},

        },
      },
    },
  },
  plugins: [],
}

