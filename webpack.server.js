const path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './server/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            "react",
            'stage-0',
            ['env', {
              target: { browsers: ['last 2 versions']}
            }]
          ]
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      }
    ]
  }
}