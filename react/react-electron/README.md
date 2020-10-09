# Typescript x Electron
[Electron](https://www.electronjs.org/)
## Electronの構成
<img src="https:///re.buildinsider.net/enterprise/electron/01/00.gif">

Electronは**一つのメインプロセス**と**一つ以上のレンダラープロセス**が動作する。
## target
webpackでコンパイルするときにelectronで問題なく動作させるためには`target`を指定する必要がある。
- メインプロセス
  ```javascript
   target: 'electron-main',
  ```
- レンダラープロセス
  ```javascript
   target: 'electron-renderer',
  ```

## Electronを導入する
```shell
yarn add electron
```
`package.json`にelectronを起動するためのスクリプトを追加する
```json
"scripts": {
  // electron <メインプロセスのjsファイル、もしくはそれを含むディレクトリ>
  "start": "electron ./build/electron/index.js",
}
```

## Electronのメインプロセスを記述する
```Typescript
import { app, BrowserWindow } from 'electron';
import path from 'path'

// メインウィンドウの表示
function createWindow() {
  const winSetting: Electron.BrowserWindowConstructorOptions = {
    width: 800,
    height: 600,
    webPreferences: {        
      nodeIntegration: true 
    }   
  }
  const mainWindow = new BrowserWindow(winSetting);
  // loadURLでレンダラープロセスが扱うhtmlファイルを指定
  const rootPath = "file://" + path.resolve('build', 'react', 'index.html');
  mainWindow.loadURL(rootPath);

}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);
```

## create-react-appで作成したときの注意
ts-configの`no-emit`を削除しないと、webpackがエラーを発生させる
```json
// "noEmit": true,
```