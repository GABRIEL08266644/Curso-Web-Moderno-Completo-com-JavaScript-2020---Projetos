const ModoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: ModoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {   
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // optimization: {
    //     // minimizer: [
    //     //     new UglifyJsPlugin({
    //     //         cache: true,     
    //     //         parallel: true
    //     //     }),
    //         // new OptimizeCSSAssetsPlugin({})
    //     // ]
    // },
    plugins: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',  // add css a DOM 
                'css-loader', // imperpreta url
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             MiniCssExtractPlugin.loader,
    //             // 'style-loader',  // add css a DOM 
    //             'css-loader' // imperpreta url
    //         ]
    //     }]
    // }
}