module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": ["error", "single"],
    "semi": [2, "never"],
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    // "object-curly-newline": ["error", {
    //   "ObjectExpression": { "minProperties": 5, "multiline": true, "consistent": true },
    //   "ObjectPattern": { "minProperties": 5, "multiline": true, "consistent": true },
    //   "ImportDeclaration": { "minProperties": 5, "multiline": true, "consistent": true },
    //   "ExportDeclaration": { "minProperties": 5, "multiline": true, "consistent": true }
    // }],
  },
}
