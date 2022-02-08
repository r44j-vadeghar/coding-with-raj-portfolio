module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "ku-app": "url('/img/ku.jpg')",
        "chat-app": "url('/img/chat-app-2.jpg')",
        "google-app": "url('/img/google-app.jpg')",
        "todo-app": "url('/img/todo-app.jpg')",
        "covid-app": "url('/img/covid-app.jpg')",
        "netflix-app": "url('/img/netflix-app.jpg')",
        "instagram-app": "url('/img/instagram-app.jpg')",
        "me-img": "url('/img/me.JPG')",
        "education-img": "url('/img/education.jpg')",
        "contact-img": "url('/img/contact.jpg')",
      }),
      animation: {
        "slide-up": "slide 600ms ease-out 1",
        "menu-down": "menu 200ms ease-in 1",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        slide: {
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
  plugins: [],
};
