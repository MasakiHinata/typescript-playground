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
    ```shell
    webpack
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