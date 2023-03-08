/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "ku-app": "url('/ku.jpg')",
        "chat-app": "url('/chat-app-2.jpg')",
        "google-app": "url('/google-app.jpg')",
        "todo-app": "url('/todo-app.jpg')",
        "covid-app": "url('/covid-app.jpg')",
        "netflix-app": "url('/netflix-app.jpg')",
        "instagram-app": "url('/instagram-app.jpg')",
        "me-img": "url('/me.JPG')",
        "education-img": "url('/education.jpg')",
        "contact-img": "url('/contact.jpg')"
      }),
      animation: {
        "slide-up": "slide 600ms ease-out 1",
        "menu-down": "menu 200ms ease-in 1",
        "spin-slow": "spin 3s linear infinite"
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(30%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "0.8" }
        },
        menu: {
          "0%": { transform: "translateY(-50%) scaleY(0)", opacity: "0" },
          "100%": { transform: "translateY(0%) scaleY(1)", opacity: "0.8" }
        }
      },
      screens: {
        "3xl": "1800px"
      }
    }
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"]
    }
  },
  plugins: []
};
