module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'eslint-config-standard-with-typescript',
        'eslint-config-prettier'
      ],
      parserOptions: { project: ['tsconfig.json'] }
    }
  ]
}
