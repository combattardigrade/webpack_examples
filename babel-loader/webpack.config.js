const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, './index.js')],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // aqui va los loaders
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        // test: que tipo de archivo quiero reconocer
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      }
    ]
  },
  plugins: [
    // aqui van los plugins
    new ExtractTextPlugin('css/[name].css')
  ]
}
