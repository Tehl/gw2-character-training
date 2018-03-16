const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const production = process.env.NODE_ENV === "production";
const chunkName = production ? "[name]-[chunkhash]" : "[name]";

const extractCssPlugin = new ExtractTextPlugin({
  filename: chunkName + ".css"
});

let plugins = [
  new webpack.DefinePlugin({
    __DEBUG__: !production
  }),
  new HtmlWebpackPlugin({
    template: "src/index.html"
  }),
  extractCssPlugin
];

if (production) {
  plugins = [...plugins, new CleanWebpackPlugin(["dist"])];
}

module.exports = {
  entry: {
    vendor: ["./vendor/kube.css"],
    app: "./src/index.js"
  },
  output: {
    filename: chunkName + ".js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./src/"
  },
  devtool: production ? "source-map" : "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.css$/,
        use: extractCssPlugin.extract({
          fallback: "style-loader",
          use: [{ loader: "css-loader" }]
        })
      },
      {
        test: /\.less$/,
        use: extractCssPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "less-loader"
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: plugins
};
