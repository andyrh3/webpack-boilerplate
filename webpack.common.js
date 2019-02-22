const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js'
    ],
    output: {
        filename: './js/[name].bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpeg|jpg|svg)/,
                exclude:[/fonts/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                exclude:[/images/],
                use: [{
                    loader: 'file-loader',
                    options: {
                        /*                        name: '[name].[ext]',
                                                outputPath: '/fonts/'*/
                        name: '[name].[ext]',
                        mimetype: 'application/font-woff',
                        publicPath: '/fonts',
                        outputPath: './fonts/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Common Title',
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'}
        ]),
        new ExtractTextPlugin('./css/style.min.css')
    ],
};


