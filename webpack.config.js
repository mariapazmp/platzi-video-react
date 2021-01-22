const path = require('path')
const HtmlWebPackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // dirname is where we are, dist is were is going to be
        filename: 'bundle.js' // here is our compiled file
    },
    resolve:{
        extensions: ['.js', '.jsx'] // extensions used for the code of our project
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/, // it identifies our projects JS files
                exclude: /node_modules/, //node modules is not going to be included
                use:{
                    loader: "babel-loader" // loader previously installed
                }
            },
            {
                test: /\.html$/, // identifying html files
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
    ]
};