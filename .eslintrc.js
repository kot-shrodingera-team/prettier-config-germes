module.exports = {
  ignorePatterns: ['!.prettierrc.js'],
  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],
    },
  ],
};
