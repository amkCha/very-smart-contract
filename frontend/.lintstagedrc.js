// https://github.com/okonet/lint-staged/issues/1090
module.exports = {
  '**/*.{js,jsx,ts,tsx,css,html,md}': [
    `yarn --cwd "${__dirname}" run prettier --write`,
  ],
  'src/**/*.{js,jsx,ts,tsx}': [`yarn --cwd "${__dirname}" run eslint --fix`],
};
