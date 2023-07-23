const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js"
    },



    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Tank",
            image: './images/battleCity.png',
            template: path.resolve(__dirname, './src/template.html'),
            filename: "index.html"
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, './src/template.html')
        },
        port: 9000
    },

    mode: "development",
}