/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts}', './public/template.svg'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports,no-undef
  plugins: [require('tailwindcss-primeui'), require('@tailwindcss/forms')],
};
