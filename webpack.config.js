var path = require('path');

var webpack = require('webpack');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    bundle: 'index.js'
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', query: { importLoaders: 0 } }
        ]
      }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => (
        module.context && module.context.indexOf('node_modules') !== -1
      )
    }),
    // new UglifyJSPlugin()
  ]
};
