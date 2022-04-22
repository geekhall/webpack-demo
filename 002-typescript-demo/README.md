# Integrate TypeScript with Webpack

## tsconfig.json

type `tsc --init` to generate `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "outDir": "./dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  }
}
```

## webpack config

```js
const path = require('path')

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
  }
}
```

## run

put all the source in the src folder,
then type `webpack` in the terminal.
and open the `index.html` to check the result.

