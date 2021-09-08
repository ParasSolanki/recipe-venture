module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/icons/**/*.{js,ts,jsx,tsx}",
    "./publilc/**/*.html",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      translate: ["group-hover"],
      width: ["hover"],
    },
  },
  plugins: [],
};
