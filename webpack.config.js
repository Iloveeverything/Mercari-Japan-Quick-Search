const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', //tells webpack which file it should use to create dependency graph
  output: {
    path: path.join(__dirname, '/dist'), //output to dist folder
    filename: 'bundle.js',
  }, //name and location of generated bundle file when we produce a production build
  plugins: [
    new HTMLWebpackPlugin({
      template: '/src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
