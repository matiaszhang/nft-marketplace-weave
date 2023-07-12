/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientPrimary: "linear-gradient(137deg, #B6116B 0%, #3B1578 100%)",
        gradientSecondary: "linear-gradient(137deg, #CE619D 0%, #3B1578 100%, #3B1578 100%, #B089BA 100%)",
        gradientDark: "linear-gradient(137deg, #980F5A 0%, #511162 100%)",
        gradientLight: "linear-gradient(137deg, rgba(255, 255, 255, 0.2) 0.55%, rgba(255, 255, 255, 0.01) 100%)",
        gradientCard: "linear-gradient(#130B2B, #130B2B), linear-gradient(100deg, #B089BA, #3A2B61)",
      },
      screens: {
        tablet: "640px",
        laptop: "1366px",
      },
    },
  },
  plugins: [],
};
