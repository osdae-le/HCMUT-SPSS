const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      gridTemplateRows: {
        // Simple 9 row grid
        9: "repeat(9, minmax(0, 1fr))",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        h1: [
          "38px",
          {
            lineHeight: "46px",
            fontWeight: "500",
          },
        ],
        h2: [
          "30px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        h4: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        h5: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        body: [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        footnote: [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        primary: "#28559A",
        secondary: "#7AC7FF",
        footerbanner: "#E6E6E6",
        neutral_2: "#FAFAFA",
        neutral_5: "#D9D9D9",
        "semi-black": "#00000073", // Custom color name
      },
    },
  },
  plugins: [],
});
