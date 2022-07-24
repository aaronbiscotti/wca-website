/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0069ff",
        secondary: "#1978ff",
        "text-title": "#444444",
        "gray-bg": "#f9f7f8",
        muted: "#6c757d",
        link: "#008BD9",
      },
    },
  },
  plugins: [],
};
