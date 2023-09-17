const path = require('path');

module.exports = function override(config) {
  if (!config.resolve) {
    config.resolve = {};
  }

  config.resolve['alias'] = {
    '@': path.resolve(__dirname, './src', 'components'),
    assets: path.resolve(__dirname, './src', 'assets'),
    api: path.resolve(__dirname, './src', 'api'),
    config: path.resolve(__dirname, './src', 'config'),
    hooks: path.resolve(__dirname, './src', 'hooks'),
    images: path.resolve(__dirname, './src', 'assets', 'images'),
    states: path.resolve(__dirname, './src', 'states'),
    utils: path.resolve(__dirname, './src', 'utils'),
    tracking: path.resolve(__dirname, './src', 'tracking'),
  };

  return config;
};
