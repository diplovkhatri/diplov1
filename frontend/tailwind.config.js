/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "425px",
        md: "675px",
        mdl: "800px",
        lg: "1080px",
        xl: "1275px"
      }
    }
  },
  plugins: []
};
