const path = require('path')
// npm i -D mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // JavaScript entry file
  entry: './src/main.ts',
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions:['.tsx', '.ts', '.js']
  },
  output: {
    // bundle all the source file into a bundle.js file.
    filename: 'bundle.js',
    // output directory
    path: path.resolve(__dirname, './dist')
  },
  plugins: [new MiniCssExtractPlugin()],
}
