/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      superdark: "#121014",
      dark: "#1b1626",
      yellow: "#f29544",
      purple: "#8168ff",
      gray: "#b1b1b1",
      white: "#ffffff",
      green: "#00897b",
      darkgray: "rgba(255, 255, 255, 0.4)",
    },
    fontFamily: {
      mono: ["var(--font-jbmono)"],
    },
    extend: {
      scale: {
        102: "1.02",
      },
      boxShadow: {
        hover: "0 0 10px #8168ff",
        focus: "0 0 5px #f29544",
      },
      animation: {
        "slide-up": "slide 1s ease-in-out forwards",
        progress: "progress 10s cubic-bezier(.14,.57,.73,.51) forwards",
      },
      keyframes: {
        slide: {
          "100%": {
            transform: "translateY(-100vh)",
          },
        },
        progress: {
          "100%": {
            transform: "translateX(99%)",
          },
        },
      },
      backgroundImage: {
        stripes:
          "repeating-linear-gradient(45deg, #121014, #121014 10px, #8168ff 10px, #8168ff 12px)",
      },
    },
  },
  plugins: [],
};
