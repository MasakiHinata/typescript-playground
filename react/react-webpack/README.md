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
js,tsファイルだけでなくhtmlファイルもバンドルする必要がある。
```shell
yarn add -D html-webpack-plugin
yarn add -D html-loader
```
- webpack.config.js
  ```javascript
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./html/index.html"
      })
    ]
  };
  ```