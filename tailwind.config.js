/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}",
    './pages/**/*.{js,ts,jsx,tsx,astro}',
    './components/**/*.{js,ts,jsx,tsx,astro}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "winter","business"],
  },
}