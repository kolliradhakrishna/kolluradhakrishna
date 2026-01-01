/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050511", // Deep Space Black
        card: "#0F0F1A",    // Dark Void Card
        accent: {
          DEFAULT: "#D946EF", // Fuchsia Pink
          emerald: "#06B6D4", // Cyan
          purple: "#8B5CF6",  // Violet
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
