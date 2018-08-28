var path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ["babel-polyfill", "./src/index"],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }, {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {}
          }
        ]
      }
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    new webpack.DefinePlugin({
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};