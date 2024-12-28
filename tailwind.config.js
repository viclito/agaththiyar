/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // max-width breakpoints
        'xl': { max: '1279px' },
        'lg': { max: '1023px' },
        'md': { max: '767px' },
        'sm': { max: '639px' },
        'xs': { max: '450px' },
      },
    },
  },
  plugins: [],
}
