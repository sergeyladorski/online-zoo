const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSEctractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
console.log('Is DEV: ', isDev);

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new CSSMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
    return config;
};

const cssLoaders = (extra) => {
    const loaders = [{
        loader: MiniCSSEctractPlugin.loader,
        options: {}
    },
        'css-loader'];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    };

    if (preset) {
        options.presets.push(preset);
    }

    return options;
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions()
    }];

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './pages/main/index.js'],
        donate: ['@babel/polyfill', './pages/donate/donate.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            images: path.resolve(__dirname, 'src/assets/images/'),
        },
    },
    optimization: optimization(),
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        compress: true,
        port: 8080,
        hot: isDev,
        open: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './pages/main/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HTMLWebpackPlugin({
            template: './pages/donate/donate.html',
            filename: 'donate.html',
            chunks: ['donate'],
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/assets/images/favicon.ico'),
                to: path.resolve(__dirname, 'dist/favicon.ico')
            }]
        }),
        new MiniCSSEctractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eof)$/,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: jsLoaders(),
            }
        ]
    }
}