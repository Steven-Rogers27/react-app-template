const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config.output.library = 'ReactMicroApp';
    config.output.libraryTarget = 'umd';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  jest: function(config) {
    return config;
  },

  devServer: function(configFunction) {
    return function(proxy, allowedHosts) {
      const config = configFunction(proxy, allowedHosts);
      config.disableHostCheck = true;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      config.historyApiFallback = true;
      config.open = false;
      return config;
    };
  },

  paths: function(paths, env) {
    return paths;
  },
};