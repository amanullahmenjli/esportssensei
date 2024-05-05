/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d0d10",
        glass: "rgba(30, 30, 39, 0.5)",
        border: "rgba(50, 50, 65, 0.5)",
        light: "#f1f7f7",
        whitesmoke: {
          "100": "rgba(241, 247, 247, 0.6)",
          "200": "rgba(241, 247, 247, 0.7)",
          "300": "rgba(241, 247, 247, 0.3)",
        },
        steelblue: "#2591bf",
        crimson: {
          "100": "#eb2e66",
          "200": "#c3083f",
          "300": "rgba(195, 8, 63, 0.4)",
          "400": "rgba(235, 46, 102, 0.09)",
          "500": "rgba(195, 8, 63, 0.2)",
        },
        white: "#fff",
        gray: {
          "100": "#1e1e27",
          "200": "rgba(30, 30, 39, 0.01)",
        },
        dimgray: "#525259",
      },
      spacing: {},
      fontFamily: {
        "section-title": "'Clash Display Variable'",
        archivo: "Archivo",
      },
      borderRadius: {
        mini: "15px",
        "16xl": "35px",
        xl: "20px",
      },
    },
    fontSize: {
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      xl: "20px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "29xl": "48px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xs": "8px",
      sm: "14px",
      smi: "13px",
      "4xs": "9px",
      mini: "15px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      mq1875: {
        raw: "screen and (max-width: 1875px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
