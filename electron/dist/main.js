"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
var fs;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/angular-elec-process/index.html"),
        protocol: 'file:',
        slashes: true,
    }));
    win.webContents.openDevTools();
    win.on('closed', function () {
        win = null;
    });
}
electron_1.ipcMain.on('ping', function (event, arg) {
    console.log('RECEIVED PING FROM ANGULAR APP', event, arg);
    event.sender.send('pong', 'yeah yeah yeah');
});
//# sourceMappingURL=main.js.map