const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
      mode: 'development', //dev or production builds
      entry: './src/electron.ts', 
      target: 'electron-main', //which enviornment webpack dumps file data
      module: {
        rules: [{
          test: /\.ts$/, //files should match .ts
          include: /src/, //all src files should be considered
          use: [{ loader: 'ts-loader' }] 
        }]
      },
      output: {
        path: __dirname + '/dist', //output file location
        filename: 'electron.js' //primary output bundle
      }
    },
    //webpack & react
    {
      mode: 'development',
      entry: './src/App.tsx',
      target: 'electron-renderer', //webpack knows of the electron renderer specifically
      devtool: 'source-map',
      module: { rules: [{
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      }] },
      output: {
        path: __dirname + '/dist',
        filename: 'react.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ]
    }
  ];