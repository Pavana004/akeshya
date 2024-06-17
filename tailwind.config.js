/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#14279b",
        "custom-black": "#444444",
        "custom-white": "rgb(255 255 255)",
        "custom-gray": "#f3f9fd",
        "custom-text-black": "#222222",
        "custom-text-bule": "#14279b",
        "custom-card-white": "#f6f6f6",
      },
      screens: {
        ml: { max: "1024px" },
      },
      container: {
        center: true,
        padding: "2rem",
      },
      animation: {
        "spin-slow": "spin 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};
