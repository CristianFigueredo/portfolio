/** @type {import("prettier").Options} */
export default {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
