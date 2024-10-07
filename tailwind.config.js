/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "top-bottom": '0 -4px 30px -1px rgba(0, 0, 0, 0.3), 0 4px 30px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

