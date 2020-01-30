module.exports = {
  useTabs: false,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',
  jsxBracketSameLine: false,
  semi: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx'],
      options: { parser: 'typescript', semi: false },
    },
    {
      files: '*.json',
      options: { parser: 'json', semi: false },
    },
    {
      files: '*.scss',
      options: { parser: 'scss', tabWidth: 4, semi: true },
    },
  ],
}
