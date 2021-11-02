module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242a45",
        "bookmark-grey": "#9194a2",
        "bookmark-white": "#F7F7F7",
      },
    },
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
