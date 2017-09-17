var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//url?limit=10000&mimetype=image/svg+xml another loader to try for svg?

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index-bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
    ],
    loaders: [
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=25000'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: 'src/',
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/user/*': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

