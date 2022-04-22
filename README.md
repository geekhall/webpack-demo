# Webpack demo

A webpack demo project for beginner.

## dependency
* Node.JS
* Webpack

## install

### NodeJS

download from [nodejs.org](https://nodejs.org/en/download/) and install.

### webpack
```bash
# npm
npm install -g webpack

# pnpm
pnpm install -g webpack

# yarn
yarn add -g webpack
```

## run

type `webpack` in the command line , then you will get output file in `./dist` directory.

```bash
webpack
```

## problem

### 1. Webpack has been initialized using a configuration object that does not match the API schema.

webpack.config.js
```js
const path = require('path')
module.exports = {
  // JavaScript entry file
  entry: './main.js',
  output: {
    // bundle all the source file into a bundle.js file.
    filename: 'bundle.js',
    // output directory
    path: path.resolve(__dirname, './dist')
  },
  module:{
    rules: {
      // use regex to matching the css file
      // to be converted by the loader.
      test: /\.css$/,
      use: ['style-loader', 'css-loader?minimize']
    }
  }
}

```

output :

```
Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.
```

Reason:

rules
```js
module:{
    rules: [
      {
        // use regex to matching the css file
        // to be converted by the loader.
        test: /\.css$/,use: ['style-loader', 'css-loader']
      }
    ]
```
