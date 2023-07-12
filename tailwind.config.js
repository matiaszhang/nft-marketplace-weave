/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        card: "linear-gradient(137deg, rgba(255, 255, 255, 0.40) 0.55%, rgba(255, 255, 255, 0.01))",
        gradientPrimary: "linear-gradient(137deg, #B6116B 0%, #3B1578 100%)",
        gradientSecondary: "linear-gradient(137deg, #CE619D 0%, #3B1578 100%, #3B1578 100%, #B089BA 100%)",
        gradientDark: "linear-gradient(137deg, #980F5A 0%, #511162 100%)",
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
};
