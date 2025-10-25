/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          bold: "#1F2937",
          medium: "#374151",
          light: "#4B5563",
        },
        violet: "#7353B9",
        grey: {
          light: "#F3F4F6",
          medium: "#9CA3AF",
          dark: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
