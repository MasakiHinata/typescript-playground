# webpack x React
## Reactのファイルを作成
1. インストール
    ```shell
    yarn add react @types/react
    yarn add react-dom @types/react-dom
    ```
1. src/js/index.tsx
    ```tsx
    import * as React from 'react';
    import React from 'react';
    import ReactDOM from 'react-dom';

    const App: React.FC = () => {
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
    }

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );

    ```
## index.htmlを用意する
webpackでプロジェクトを作るときは、  
コンパイル時に**自動的に`script`タグが追加**されるので  
素のファイルでは`bundle.js`などを指定しなくてもいい  
```html
<!DOCTYPE html>
<html>
  <head>
      <meta charset="UTF-8">
      <title>React</title>
  </head>
  <body>
      <div id="root"></div>
  </body>
</html>
```
## webpack
js,tsファイルだけでなくhtmlファイルもバンドルする必要があり、
ファイルに対応したloaderが提供されている。
- webpack.config.js
  ```javascript
  const path = require('path');
  
  module.exports = {
    mode: "development",
    context: path.resolve(__dirname, 'src'),
    entry: "./js/index.tsx",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    }
  };
  ```
- ### htmlをバンドルする
  ```shell
  yarn add -D html-webpack-plugin
  yarn add -D html-loader
  ```
  ```javascript
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    /*  ...   */
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: "html-loader"
        },
      ]
    },
    /*  ...   */
    plugins: [
        new HtmlWebpackPlugin({
          template: "./html/index.html"
        })
      ]
  }
  ```
- ### cssをバンドルする
  ```javascript
  module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
    },
  }
  ```
  ### 他のファイル(svgなど)をバンドルする
  ```javascript
  module.exports = {
    module: {
      rules: [
        { 
          test: /\.(ttf|eot|jpe?g|png|gif|svg)?$/, 
          loader: "file-loader" 
        }
    },
  }
  ```