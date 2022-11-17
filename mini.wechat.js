const { mergeConfig } = require('./utils');
const baseConfig = require('.');

module.exports = mergeConfig(baseConfig, {
  overrides: [
    {
      files: ['*.wxss'],
      options: {
        parser: 'css',
      },
    },
    {
      files: ['*.wxml'],
      options: {
        parser: 'lwc',
      },
    },
    {
      files: ['*.wxs'],
      options: {
        parser: 'typescript',
      },
    },
  ],
});
