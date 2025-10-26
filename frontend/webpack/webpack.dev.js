// const { merge } = require('webpack-merge');
// const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// const common = require('./webpack.common')



// module.exports = merge(common, {
// 	mode: 'development',
// 	devtool: 'eval-source-map',

// 	devServer: {
// 		static: {
// 			directory: path.join(__dirname, 'public'),
// 		},
// 		open: true,
// 		compress: true, // сжимаем все из public
// 		hot: true,
// 		port: 3000,
// 		historyApiFallback: true,
// 		allowedHosts: 'all',
// 		// https: true,
// 		// proxy: {
// 		// 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
// 		//   },
// 		// allowedHosts: [
// 		// 	'flamencoshow.ru'
// 		// ]
// 	},

// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/i,
// 				use: ['style-loader', 'css-loader'],
// 			},
// 			{
// 				test: /\.less$/,
// 				use: [
// 					'style-loader',
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
// 				use: ['style-loader', 'css-loader', 'sass-loader'],
// 			},
// 		],
// 	},

// 	plugins: [
// 		new CopyWebpackPlugin({
// 			patterns: [
// 				// {from: 'public', to: './'}
// 			  { from: __dirname, to: "../src/index.html" },
// 			//   { from: "other", to: "public" },
// 			],
// 		  }),
// 	]
// })

