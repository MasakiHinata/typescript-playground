# webpack
[webpack](https://webpack.js.org/)
## Webpackを利用するメリット
- モダンでないブラウザでモジュールを使える  
    moduleに対応していないブラウザでも、動作できるようにする。

- http通信を一括化する  
    一つのファイルにまとめられるので通信が最小限になる。

- コードの最適化  
    空白や改行を最適化される

- 様々なファイルを扱える  
    jsだけでなくts, jpg, pngなども利用可能

- HMR  
    保存した瞬間に更新される
## 導入
- インストール
    ```shell
    yarn add webpack webpack-cli --dev
    ```

- webpack.config.js
    webpackを動作させると呼ばれるファイル
    ```javascript
    const path = require('path');
    module.exports = {
        // スタートポイント
        entry: './dist/index.js',
        output: {
            // bundleされたファイルの名前 
            filename: 'bundle.js',
            // 絶対パスを指定する
            path: path.resolve(__dirname, 'dist'),
        }
    }   
    ```
- バンドルを実行  
    package.jsonにスクリプトを加えて実行する
    ```json
    scripts: {
        "build": "webpack"
    }
    ```
    ```shell
    yarn build
    ```
## Typescriptからバンドルを作成する
- ts-loaderを導入  
    ts-loaderと一緒にtypescriptを依存関係に追加する必要がある
    ```shell
    yarn -D add typescript ts-loader
    ```
- tsファイルをts-loaderに通す  
    webpack.config.js
    ```javascript
    module: {
        rules: [{
                // tsファイルをts-loaderに渡す
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }]
    },
    resolve: {
        // import文を`.ts`> `.js`ファイルの順で解決
        // ex) from './car' -> from './car.ts'
        extensions: ['.ts', '.js']
    }
    ```
## mode
modeを指定していないと以下のような警告が表示される。
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
`webpack.config.js`でmodeを指定することで、`bundle.js`の出力方法が変わる。
```javascript
module.exports = {
    // production | development
    mode: "production",
```
- development: 改行あり
- production: すべてを一行にする。
## webpack-dev-server
- bundleを作成
- ローカルのファイルの変更をリアルタイムで反映
- ### インストール
    ```shell
    yarn add -D webpack-dev-server
    ```
- ### package.jsonにスクリプトを追加
    ```json
    scripts: {
        "start": "webpack-dev-server"
    }
    ```
- ### bundle.js
    `webpack-dev-server`を動作させると**インメモリ**上で`bundle.js`が作成される。  
    そのため、実際にファイルが作成されることはない。  
    `bundle.js`の出力先は`publicPath`で指定できる。(デフォルトではindex.htmlと同じ場所)
    ```javascript
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    }
    ```
## webpack.xx.js
`webpack.prod.js`, `webpack.dev.js`のようにファイル名を変えて、設定を分けることができる。  
- ### 実行方法
    `--config`としてファイルを指定する
    ```json
    scripts: {
        "build": "webpack --config webpack.prod.js",
        "start": "webpack-dev-server --config webpack.dev.js"
    }
    ```
    
## plugin
plugins
- distフォルダをクリーンな状態に保つ
    ```shell
    yarn add -D clean-webpack-plugin
    ```
    ```javascript
    const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
    module.exports = {
        /* ...  */
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
    ```
