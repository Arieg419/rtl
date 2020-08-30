const {
  override,
  disableEsLint,
  addBabelPlugins,
  babelInclude,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require("customize-cra");
const webpack = require("webpack");
const path = require("path");

module.exports = override(
  // disable eslint in webpack
  disableEsLint(),
  addBabelPlugins(
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from"
  ),
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif)$/,
    options: {
      name: "[name].[ext]",
      scalings: { "@2x": 2, "@3x": 3 },
    },
    loader: "react-native-web-image-loader",
  }),
  addWebpackModuleRule({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: "babel-loader",
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configuration for compilation
        presets: [
          ["@babel/preset-env", { useBuiltIns: "usage" }],
          "@babel/preset-react",
          "@babel/preset-flow",
          "@babel/preset-typescript",
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread",
        ],
      },
    },
  }),
  babelInclude([
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "../../packages"),
  ]),
  addWebpackPlugin(
    new webpack.DefinePlugin({ __DEV__: process.env.NODE_ENV !== "production" })
  ),
  addWebpackPlugin(
    new webpack.NormalModuleReplacementPlugin(
      /^react-native\/Libraries\/Components\/UnimplementedViews\/UnimplementedView$/,
      path.resolve(__dirname + "/empty.js")
    )
  )
);
