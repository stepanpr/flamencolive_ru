// const path = require('path');
// // const Config = require('./utils')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// /** Базовый конфиг. */
// module.exports = {
//     entry: {
//         main: path.resolve('../src/index.tsx'), // точка входа приложения
//     },
//     output: {
//         path: path.join(__dirname, '../dist/'), // точка выхода приложения, директория
//         filename: '[name].[contenthash].js',
//         publicPath: '/',
//     },
//     // plugins: [
//     //     new HtmlWebpackPlugin({
//     //         title: 'FlamencoLive',
//     //         template: path.resolve(__dirname, './src/template.html'), // шаблон
//     //         filename: 'index.html', // название выходного файла
//     //     }),
//     // ],
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'FlamencoLive',
//             template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
//             filename: 'index.html', // название выходного файла
//             favicon: path.join(__dirname, '../', 'public', 'favicon.png'),
//             // name: 'index',
//             // inject: true
//         }),
//         new CleanWebpackPlugin(),
//         // new CopyWebpackPlugin({
//         //     patterns: [
//         //         { from: 'public/robots.txt', to: './' },
//         //         { from: 'public/sitemap.xml', to: './' },
//         //         // { from: 'public/favicon.png', to: './' },
//         //     ],
//         // }),
//     ],
//     resolve: {
//         extensions: ['.js', '.ts', '.tsx'],
//         // alias: {
//         //     app: path.resolve(__dirname, '../src/app'),
//         //     pages: path.resolve(__dirname, '../src/pages'),
//         //     shared: path.resolve(__dirname, '../src/shared'),
//         //     widgets: path.resolve(__dirname, '../src/widgets'),
//         //     data: path.resolve(__dirname, '../src/data'),
//         // },
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 exclude: /node_modules/,
//                 use: 'ts-loader',
//             },
//             // изображения
//             {
//                 // test: /\.(png|svg|jpg|jpeg|gif)$/i,
//                 test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//                 type: 'asset/resource',
//             },
//             // шрифты и SVG
//             {
//                 test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//                 type: 'asset/inline',
//             },
//             {
//                 test: /\.(mp4|svg)$/,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                     },
//                 ],
//             },
//             {
//                 test: /\.(ico)$/,
//                 use: ['file-loader?name=[name].[ext]'],
//             },
//         ],
//     },
//     externals: {
//         React: 'react',
//         ReactDOM: 'react-dom',
//     },
// };

// // exports.config = new Config(webpackBaseConfig)
