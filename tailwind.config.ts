/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        containerContent: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "250px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        nav: "1300px",
      },
      fontFamily: {
        regular: ["Work Sans", "sans-serif"],
        hw: ["Delius", " cursive"],
        body: ["Mukta", "sans-serif"],
        stylish: ["Sacramento", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
      },
      colors: {
        bodyColor: "#021428",
        lightWhite: "#EEEEEE",
        lightBlack: "#393E46",
        cardViolate: "#ADA2FF",
        cardSkyBlue: "#C0DEFF",
        cardPink: "#FFE5F1",
        cardYellow: "#FFF8E1",
        textGreen: "#00C897",
        textBlue: "#2192FF",
        textCyan: "#00C7FF",
        textYellow: "#EEC40E",
        textOrange: "#F55813",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
        reviewShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      },
    },
  },
};