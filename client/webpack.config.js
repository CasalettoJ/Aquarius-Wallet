const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  build: path.resolve(__dirname, "dist"),
  src: path.resolve(__dirname, "src"),
  assets: path.resolve(__dirname, "src/assets"),
  components: path.resolve(__dirname, "src/components")
};

const webpackConfig = {
  // https://webpack.js.org/concepts/#mode
  mode: "development",
  context: paths.src,

  // https://babeljs.io/docs/en/babel-polyfill
  entry: ["@babel/polyfill", path.resolve(paths.src, "App.tsx")],
  output: {
    path: paths.build,
    filename: "bundle.js"
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "babel-loader"
      },
      // https://github.com/webpack-contrib/file-loader --See for config
      {
        test: /\.(png|jpg|jpeg|gif|ttf|otf|svg|pdf|gltf|bin)$/,
        loader: "file-loader"
      },
      // https://www.npmjs.com/package/eslint-loader --See "Usage"
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: "eslint-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },

  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#options --See for config.
    new HtmlWebpackPlugin({
      template: path.join(paths.src, "index.html"),
      hash: true
    })
  ],

  devServer: {
    contentBase: paths.build,
    publicPath: "/",
    historyApiFallback: true
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};

module.exports = webpackConfig;
