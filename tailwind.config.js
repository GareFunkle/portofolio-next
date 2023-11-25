/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "gradient-gotham": "linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))",
      },
      colors: {
        "my-color": "#003549",
      },

      boxShadow: {
        inner: "inset 0 2px 4px 0 #003549",
      },
      fontSize: {
        h1: "calc(1.375rem + 1.5vw)",
        h2: "calc(1.325rem + 0.9vw)",
        h3: "calc(1.3rem + 0.6vw)",
        p: "calc(0.8rem + 0.4vw)",
      },
      animation: {
        fadeInUp: "fadeIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
            left: "0",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(70%)",
            left: "0",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            left: "0",
          },
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-gradient-mask-image"),
  ],
};
