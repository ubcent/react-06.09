const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
<<<<<<< HEAD
    main: path.resolve(__dirname, 'src', 'index.js'),
=======
    main: path.resolve(__dirname, 'src','js', 'index.js'),
>>>>>>> 8e0874b541bdeb1a62fddd01c3fe1ec1a5765b08
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css' }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    })
  ]
}