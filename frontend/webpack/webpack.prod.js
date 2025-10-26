// const { merge } = require('webpack-merge');
// // const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const common = require('./webpack.common')

// module.exports = merge(common, {
// 	mode: 'production',
// 	devtool: 'nosources-source-map',
// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/,
// 				use: [MiniCssExtractPlugin.loader, 'css-loader']
// 			},
// 			{
// 				test: /\.less$/,
// 				use: [
// 					MiniCssExtractPlugin.loader,
// 					{
// 						loader: 'css-loader',
// 						options: {
// 							modules: {
// 								localIdentName: '[local]__[hash:base64:5]',
// 								mode: 'local',
// 							},
// 						},
// 					},
// 					'less-loader',
// 				],
// 			},
// 			{
// 				test: /\.scss$/,
// 				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
// 			},
// 		]
// 	},
// 	plugins: [
// 		new MiniCssExtractPlugin({
// 			filename: 'name.css',
// 			runtime: false,
// 		})
// 		// new GenerateJsonPlugin()
// 	],
// 	// optimization: {}
// })

// // const lessProd = {
// //     test: /\.less$/,
// //     use: [
// //         MiniCssExtractPlugin.loader,
// //         {
// //             loader: 'css-loader',
// //             options: {
// //                 modules: {
// //                     localIdentName: '[local]__[hash:base64:5]',
// //                     mode: 'local',
// //                 },
// //             },
// //         },
// //         'less-loader',
// //     ],
// // };

// // const scssProd = {
// //     test: /\.scss$/,
// //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
// // };

// // console.log(config.getConfig());

// // // module.exports = {
// // //     ...config
// // //         // .setMode('production')
// // //         .extendPlugins(new MiniCssExtractPlugin())
// // //         .extendRules(lessProd)
// // //         .extendRules(scssProd)
// // //         .getConfig(),
// //     // ...commonConfig,
// //     // mode: 'production',
// // };
