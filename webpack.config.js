const path = require('path')
module.exports = {
  // JavaScript entry file
  entry: './main.js',
  output: {
    // bundle all the source file into a bundle.js file.
    filename: 'bundle.js',
    // output directory
    path: path.resolve(__dirname, './dist')
  }
}
