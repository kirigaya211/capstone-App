/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#FF4081",
        background: "#FFFFFF",
        textPrimary: "#212121",
        textSecondary: "#757575",
      },
    },
  },
  plugins: [],
};
