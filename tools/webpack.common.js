const MiniCSSExtactPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const isProduction = process.env.node_env === 'production';

const stylesLoader = (isSass) => {
  const loader = {
    use: [
      MiniCSSExtactPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [['autoprefixer']],
          },
        },
      },
    ],
    sideEffects: true,
  };

  return isSass ? { ...loader, use: [...loader.use, 'sass-loader'] } : loader;
};

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'assets/[contenthash:8][ext]',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtactPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 3020,
    watchContentBase: true,
    progress: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'awesome-typescript-loader'].filter(Boolean),
      },
      {
        test: /\.s[ac]ss$/i,
        ...stylesLoader(true),
      },
      {
        test: /\.css$/i,
        ...stylesLoader(false),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: isProduction ? false : 'source-map',
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};
