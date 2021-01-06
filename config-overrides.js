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
    config.entry = [
      '@babel/polyfill',
      'react',
      'react-dom',
      config.entry,
    ];

    const babelLoader = getBabelLoader(config);
    babelLoader.options.presets.push(
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: '2',
          modules: 'umd',
        }
      ]
    );
    fs.writeFile(path.resolve(__dirname, 'babel-loader-config.json'), JSON.stringify(babelLoader), err => {
      console.error(err);
    });
    console.log(babelLoader);

    const babelLoaderOuter = getBabelLoader(config, true);
    babelLoaderOuter.options.plugins = babelLoaderOuter.options.plugins || [];
    babelLoaderOuter.options.plugins.push(
      // [
      //   '@babel/plugin-transform-arrow-functions',
      // ],
      [
        '@babel/plugin-transform-runtime'
      ],
    );
    // babelLoaderOuter.options.presets.push(
    //   [
    //     '@babel/env',
    //     {
    //       useBuiltIns: 'usage',
    //       corejs: '2',
    //       modules: 'umd',
    //     }
    //   ]
    // );
    fs.writeFile(path.resolve(__dirname, 'babel-loader-outer.json'), JSON.stringify(babelLoaderOuter), err => {
      console.error(err);
    })
    console.log(babelLoaderOuter);


    fs.writeFile(path.resolve(__dirname, 'webpack.config.json'), JSON.stringify(config), err => {
      console.error(err);
    })

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