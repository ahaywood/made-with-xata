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
      colors: {
        caribbeanGreen: '#00dc9d',
        montana: '#393939', /* dark gray */
        selectiveYellow: '#ffbb00',
        stack: '#8c8c8c', /* light gray */
      },
      dropShadow: {
        toggle: '0px 1px 3px rgba(16, 24, 40, 0.4), 0px 1px 2px rgba(16, 24, 40, 0.15)'
      },
      maxWidth: {
        pageWidth: "1240px",
      }
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      pageTitle: ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}
