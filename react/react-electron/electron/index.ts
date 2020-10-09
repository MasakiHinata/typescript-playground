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
  const rootPath = "file://" + path.resolve('build', 'react', 'index.html');
  mainWindow.loadURL(rootPath);

}

// Electron の初期化が完了したらウィンドウを作成
app.whenReady().then(createWindow);