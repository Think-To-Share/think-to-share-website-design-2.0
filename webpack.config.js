const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = (_env, options) => {
    const isProduction = options.mode !== 'development';

    let config = {
        entry: ['./src/scripts/app.ts', './src/scss/app.scss'],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/app.js',
            pathinfo: isProduction,
            clean: true,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "swc-loader",
                        options: {
                            jsc: {
                                parser: {
                                    syntax: "typescript"
                                }
                            }
                        }
                    }
                },
    
                {
                    test: /\.(sa|sc|c)ss$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: '../',
                            }
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
    
                {
                    test: /\.(jpe?g|png|webp|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'public/[name]-[hash][ext]'
                    }
                }
            ]
        },
        plugins: [
            new WebpackBar(),
            new MiniCssExtractPlugin({
                filename: 'css/app.css'
            }),
        ],
        optimization: {
            minimizer: [
                `...`,
                new CssMinimizerPlugin(),
            ],
        },
    }

    if(! isProduction) {
        config['devtool'] = 'source-map'
    }

    return config;
}