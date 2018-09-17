const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, 'src', 'index.jsx'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src', 'components')
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				issuer: /\.s?css$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						},
					},
				],
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'bundle.css'}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'index.html',
		})
	]
}