/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "md-custom": { raw: "(min-width: 500px)" },
    },
  },
  plugins: [],
};
