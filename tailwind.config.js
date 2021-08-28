const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      backgroundImage: (theme) => ({
        "chat-app": "url('/chat-app-2.jpg')",
        "google-app": "url('/google-app.jpg')",
        "todo-app": "url('/todo-app.jpg')",
      }),
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        warmGray: colors.warmGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        blueGray: colors.blueGray,
        sky: colors.sky,
        indigo: colors.indigo,
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        emerald: colors.emerald,
        teal: colors.teal,
      },
      animation: {
        "fade-up": "fade 600ms ease-out 1",
        "menu-down": "menu 200ms ease-in 1",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(30%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "0.8" },
        },
        menu: {
          "0%": { transform: "translateY(-50%) scaleY(0)", opacity: "0" },
          "100%": { transform: "translateY(0%) scaleY(1)", opacity: "0.8" },
        },
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
