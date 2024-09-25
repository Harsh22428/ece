/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"TitilliumWeb-Regular"', "sans-serif"], // Define your custom font family
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fade: "fade 1s infinite",
      },
    },
  },
  plugins: [],
};
