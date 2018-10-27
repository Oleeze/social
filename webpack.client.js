const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
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
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}