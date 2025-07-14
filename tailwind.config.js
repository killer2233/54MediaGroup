/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind where to scan for class names:
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // now you can use `4k:` as a prefix in your classes
        '4k': '3840px',
      },
    },
  },
  plugins: [],
}
