/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}', './public/template.svg'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui'), require('@tailwindcss/forms')],
};
