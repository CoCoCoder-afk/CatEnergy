const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        auth: "./source/js/auth.js",
        listRequests: "./source/js/listRequests.js",
        forms: "./source/js/forms.js"
    },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "source/js")
   },
    mode: "production",
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
  devServer: {
     contentBase: path.join(__dirname, 'source/'),
    port: 3000
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
}
