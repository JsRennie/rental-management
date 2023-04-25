/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        modal: "url('/Done-rafiki.png')",
        banner: "url('/banner.png')",
        profile: "url('/profile.jpg')",
      },
    },
  },
  plugins: [],
};
