const path = require('path');
const ExtractTextPlugin = 

module.exports = {
    entry:{
        main:path.resolve(__dirname,'src','index.js'),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                },
            },
            {
                test:/\.css$/,
            }
        ]
    }
}