const { mergeConfig } = require('./utils');
const baseConfig = require('.');

module.exports = mergeConfig(baseConfig, {
  overrides: [
    {
      files: ['*.acss'],
      options: {
        parser: 'css',
      },
    },
    {
      files: ['*.axml'],
      options: {
        parser: 'lwc',
      },
    },
    {
      files: ['*.sjs'],
      options: {
        parser: 'typescript',
      },
    },
  ],
});
