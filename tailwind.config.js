/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,ts,jsx,tsx}", // arquivos na raiz
    "./src/**/*.{js,ts,jsx,tsx}", // arquivos na pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
