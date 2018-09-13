const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		})
	]
};