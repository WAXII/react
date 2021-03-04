const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build','v1.01'),
        filename: 'bundle.js',
        publicPath: '/build/v1.01/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname,'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/env',
                        ['@babel/preset-react', {
                            runtime: 'automatic'
                        }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html",
            inject: 'body'
        })
    ],
};