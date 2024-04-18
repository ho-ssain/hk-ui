/** @type {import('tailwindcss').Config} */
import formPlugin from "@tailwindcss/forms";

export default {
  content: [
    "./index.html", //
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [formPlugin],
};
