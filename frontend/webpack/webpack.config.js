const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Общий конфиг
const config = {
    entry: {
        main: path.resolve(__dirname, '../src/index.tsx'), // точка входа приложения
    },
    output: {
        path: path.join(__dirname, '../dist/'), // точка выхода приложения, директория
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'FlamencoLive',
            template: path.join(__dirname, '../', 'public', 'index.html'), // шаблон
            filename: 'index.html', // название выходного файла
            // favicon: path.join(__dirname, '../', 'public', 'favicon.png'),
            // name: 'index',
            // inject: true
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                // {from: 'public', to: './'}
                { from: __dirname, to: '../src/index.html' },

                // { from: 'public/robots.txt', to: './' },
                // { from: 'public/sitemap.xml', to: './' },
                // { from: 'public/favicon.png', to: './' },
            ],
        }),
    ],

    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            app: path.resolve(__dirname, '../src/app'),
            pages: path.resolve(__dirname, '../src/pages'),
            shared: path.resolve(__dirname, '../src/shared'),
            widgets: path.resolve(__dirname, '../src/widgets'),
            // data: path.resolve(__dirname, '../src/data'),
        },
    },

	// TODO: add MiniCssExtractPlugin

    module: {
        rules: [
			//js, ts, tsx
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            //styles
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                                mode: 'local',
                            },
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // images
            {
                // test: /\.(png|svg|jpg|jpeg|gif)$/i,
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // fonts and SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
			// files
            {
                test: /\.(mp4|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(ico)$/,
                use: ['file-loader?name=[name].[ext]'],
            },
        ],
    },
    externals: {
        React: 'react',
        ReactDOM: 'react-dom',
    },
};

module.exports = (env, argv) => {
    console.log('!!!!!!!!env', env);
    console.log('!!!!!!!!argv', argv);

    if (argv.mode === 'development') {
        config.devtool = 'eval-source-map';

        config.devServer = {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            open: true,
            compress: true, // сжимаем все из public
            hot: true,
            port: 3000,
            historyApiFallback: true,
            allowedHosts: 'all',
            // https: true,
            // proxy: {
            // 	'/api': 'http://localhost:3000', === 'http://localhost:3000/api/users'
            //   },
            // allowedHosts: [
            // 	'flamencoshow.ru'
            // ]
        };
    } else {
        config.devtool = 'nosources-source-map';
    }

    return {
        mode: argv.mode,
        ...config,
    };
};
