// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  parser: 'postcss-html',
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
  },
};
