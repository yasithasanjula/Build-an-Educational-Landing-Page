/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightBackground: '#FDF8EE',
        brightGreen: '#539165',
        LightText: '#959595',
      },
    },
  },
  plugins: [],
}