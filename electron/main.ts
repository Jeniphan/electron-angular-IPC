import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as url from 'url'
import { isObject } from 'util';

let win: BrowserWindow
let fs: any;

app.on('ready', createWindow)

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

function createWindow() {
    win = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../dist/angular-elec-process/index.html`),
            protocol: 'file:',
            slashes: true,
        })
    )

    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null!
    })
}

ipcMain.on('ping', (event, arg) => {
    console.log('RECEIVED PING FROM ANGULAR APP', event, arg);
    event.sender.send('pong', 'yeah yeah yeah');
});
