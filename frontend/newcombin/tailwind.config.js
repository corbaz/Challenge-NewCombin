const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amarillo: "var(--amarillo)",
        rosa: colors.fuchsia,
        menu: "#ff8000",
        main: "#ffffff",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '1024px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
