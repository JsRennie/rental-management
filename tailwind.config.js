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
        hero: "url('/Hero.jpg')",
        map: "url('/Map.png')",
        desc: "url('/desc.jpg')",
        lease: "url('/lease.jpg')",
        happy: "url('/happy.jpg')",
        clean: "url('/clean.jpg')",
        roommate: "url('/roommate.jpg')",
        bunk: "url('/bunk.jpg')",
        double: "url('/double.jpg')",
        platinum: "url('/platinum.jpg')",
        condo: "url('/condo.jpg')",
        deluxe: "url('/ddeluxe.jpg')",
      },
    },
  },
  plugins: [],
};
