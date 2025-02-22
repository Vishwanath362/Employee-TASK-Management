/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Other/**/*.{js,ts,jsx,tsx}", // ✅ Add specific folders outside src
    "./pages/**/*.{js,ts,jsx,tsx}",
    "!./node_modules/**" // ✅ Exclude node_modules
  ],
  theme: {
    extend: {},
    
  },
  plugins: [],
}
