module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  ignorePatterns: ['!.*', 'node_modules'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
    },
  ],
};
