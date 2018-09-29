const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.jsx'),
        blog: path.resolve(__dirname, 'src', 'blog.jsx'),
        post: path.resolve(__dirname, 'src', 'post6.jsx'),
        post1: path.resolve(__dirname, 'src', 'post1.jsx'),
        post2: path.resolve(__dirname, 'src', 'post2.jsx'),
        post3: path.resolve(__dirname, 'src', 'post3.jsx'),
        post4: path.resolve(__dirname, 'src', 'post4.jsx'),
        post5: path.resolve(__dirname, 'src', 'post5.jsx'),
        comments: path.resolve(__dirname, 'src', 'comments.jsx'),
        users: path.resolve(__dirname, 'src', 'users.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            containers: path.resolve(__dirname, 'src', 'containers'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                }),
            }, 
        ]
    }, plugins: [
        new ExtractTextPlugin ({
            filename: 'style.css'
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'blog.html'),
            filename: 'blog.html',
            chunks: ['blog'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post6.html'),
            filename: 'post6.html',
            chunks: ['post'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post1.html'),
            filename: 'post1.html',
            chunks: ['post1'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post2.html'),
            filename: 'post2.html',
            chunks: ['post2'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post3.html'),
            filename: 'post3.html',
            chunks: ['post3'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post4.html'),
            filename: 'post4.html',
            chunks: ['post4'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'post5.html'),
            filename: 'post5.html',
            chunks: ['post5'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'comments.html'),
            filename: 'comments.html',
            chunks: ['comments'],
        }), 
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'users.html'),
            filename: 'users.html',
            chunks: ['users'],
        }),
    ]
}