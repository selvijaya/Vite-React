/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", //Tells Tailwind to look at all JavaScript and TypeScript files (*.js, *.ts, *.jsx, *.tsx) in the src directory and its subdirectories for class usage.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
