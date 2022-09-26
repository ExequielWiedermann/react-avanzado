// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
        output: {
                filename: 'app.bundle.js'
        },
        plugins: [
                new HtmlWebpackPlugin(
                        {
                                template: 'src/index.html'
                        }
                )
        ],
        module:{
               rules: [
                {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use:{
                                loader: 'babel-loader',
                                options:{
                                        presents:[
                                                '@babel/present-env',
                                                '@babel/present-react'
                                        ]
                                }
                        }
                }
               ] 
        }
}