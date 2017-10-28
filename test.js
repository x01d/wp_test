module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },
      { test: /\.(eot|jpg|png|gif|ttf|svg|woff|woff2|otf)$/, loader: 'url-loader'}
    ]
  }