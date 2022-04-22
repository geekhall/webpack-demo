const path = require('path')
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
        test: /\.css$/,use: ['style-loader', 'css-loader']
      }
    ]
  }
}
