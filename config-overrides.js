const path = require('path');
const fs = require('fs');
const {
  getBabelLoader,
} = require('customize-cra');

module.exports = {
  webpack: function(config, env) {
    config.output.library = 'ReactMicroApp';
    config.output.libraryTarget = 'umd';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    // 为了兼容IE11，据说是react和react-dom的所依赖的Symbol polyfill版本不一样，需要强制依次引入core-js（因为@babel/polyfill即将作废，其内部
    // 还是引用的core-js和regenerator-runtime）、react、react-dom，以保证react和react-dom使用同样的Symbol polyfill
    // issue: https://stackoverflow.com/questions/40897966/objects-are-not-valid-as-a-react-child-in-internet-explorer-11-for-react-15-4-1
    config.entry = [
      'react',
      'react-dom',
      config.entry,
    ];
    // 处理src目录下的js文件的babel-loader配置
    const babelLoader = getBabelLoader(config);
    babelLoader.options.presets.push(
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: '3',
          targets: {
            ie: 9,
          },
          modules: 'umd',
        }
      ],
      [
        '@babel/preset-react',
        {
          development: process.env.NODE_ENV === 'development',
        }
      ],
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        }
      ],
    );
    // 处理src目录以外的js文件的babel-loader配置
    const babelLoaderOuter = getBabelLoader(config, true);
    babelLoaderOuter.options.plugins = babelLoaderOuter.options.plugins || [];
    babelLoaderOuter.options.plugins.push(
      [
        '@babel/plugin-transform-runtime'
      ],
    );

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