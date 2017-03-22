module.exports = {
  entry: './app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  context: __dirname + '/app',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: "#inline-source-map"
};
