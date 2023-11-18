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
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "my-color": "#003549",
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 #003549",
      },
      fontSize: {
        h1: "calc(1.375rem + 1.5vw)",
        h2: "calc(1.325rem + 0.9vw)",
        p: "calc(1rem + 0.5vw)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-gradient-mask-image"),
  ],
};
