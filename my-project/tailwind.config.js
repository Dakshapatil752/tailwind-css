 /** @type {import('tailwindcss').Config} */
export default {
  // Include the my-project HTML and all JS/JSX/TS/TSX source files
  content: [
    './my-project/index.html',
    './my-project/src/**/*.{html,js,jsx,ts,tsx}',
    // fallback: any html files at workspace root or other folders
    './**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
