const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'index.js'),
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // aqui va los loaders
      {
        // test: que tipo de archivo quiero reconocer
        // user: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
