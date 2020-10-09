const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var electron = {
  target: 'electron-main',
  mode: 'development',
  entry: path.join(__dirname, 'electron', 'index'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'build', 'electron'),
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    },],
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};

var react = {
  mode: 'development',
  target: 'electron-renderer',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build', 'react'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.(ttf|eot|jpe?g|png|gif|svg)?$/, 
        loader: "file-loader" 
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = [electron, react];