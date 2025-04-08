/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        toolkit: "0 10px 20px 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
