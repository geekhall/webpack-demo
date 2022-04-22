# Hello Webpack

## webpack config

```js
const path = require('path')
// npm i -D extract-text-webpack-plugin (deprecated)
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// npm i -D mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // JavaScript entry file
  entry: './main.js',
  mode: 'development',
  output: {
    // bundle all the source file into a bundle.js file.
    filename: 'bundle.js',
    // output directory
    path: path.resolve(__dirname, './dist')
  },
  module:{
    rules: [
      {
        // use regex to matching the css file
        // to be converted by the loader.
        // test: /\.css$/,use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader" ]
        test: /\.css$/,use: ["style-loader", "css-loader" ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],
}

```

## run

put all the source in the src folder,
then type `webpack` in the terminal.
and open the `index.html` to check the result.

