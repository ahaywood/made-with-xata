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
        selectiveYellow: '#ffbb00',
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
