/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

extend: {
  fontFamily: {
    sans: ['Source Sans 3', 'sans-serif'],
  },
}
