module.exports = {
  processors: ['stylelint-processor-html'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  rules: {
    'no-empty-source': null,
  },
};
