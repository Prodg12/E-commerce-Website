/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      gray50: "#F2F2F2",
      gray100: "#E6E6E6",
      gray200: "#CCCCCC",
      gray300: "#B3B3B3",
      gray400: "#999999",
      gray500: "#808080",
      gray600: "#666666",
      gray700: "#4D4D4D",
      gray800: "#333333",
      gray900: "#1A1A1A",
      success: "#00B207",
      successDark: "#2C742F",
      successLight: "#84D187",
      warning: "#FF8A00",
      error: "#EA4B48",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },  
  },
  plugins: [],
};
