import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import tailwindNesting from 'tailwindcss/nesting';
import postcssImport from 'postcss-import';

export default {
  plugins: [postcssImport, tailwindNesting, tailwind, autoprefixer],
};
