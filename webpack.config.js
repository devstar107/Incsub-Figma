const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: "./src/reactApp.js",
  output: {
    path: path.resolve("public/asset/js"),
    filename: "reactApp.js",
  },
  // define babel loader
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
        loader: 'style-loader'
        }, {
        loader: 'css-loader'
        }, {
        loader: 'sass-loader'
        }]
        },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    // contentBase: "public",
    compress: false,
    // inline: true,
    // progress: true,
    hot: true,
    port: 9999,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "public/index.html",
    }),
  ],
  resolve: {
    extensions: [".vue", ".js", ".css", ".jsx", ".scss"],
  },
};
