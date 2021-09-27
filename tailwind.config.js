module.exports = {
  purge: {
    enabled: true,
    content: ["*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#252632",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      borderRadius: {
        big: "3rem",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
