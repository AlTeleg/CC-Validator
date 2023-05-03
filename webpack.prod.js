const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.foo\.css$/i,
      }),
    ],
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    open: true,
    compress: true
  },
});
