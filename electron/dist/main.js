"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var url = require("url");
var path = require("path");
// import * as file from './file'
var file_1 = require("./file");
var db_1 = require("./db");
var win;
var childWindow;
var _fileSystem = new file_1.fileSystem();
var _database = new db_1.database();
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
function createchildWindow() {
    childWindow = new electron_1.BrowserWindow({
        width: 700, height: 500,
        modal: true,
        show: false,
        parent: win,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    childWindow.loadURL(url.format({
        pathname: path.join(__dirname, "/../../childwindow/app.html"),
        protocol: 'file:',
        slashes: true,
    }));
    childWindow.once("ready-to-show", function () {
        childWindow.show();
    });
    childWindow.webContents.openDevTools();
    childWindow.on('close', function () {
        childWindow = null;
    });
}
electron_1.ipcMain.on('allTasks', function (event, arg) {
    console.log('RECEIVED PING FROM HTML APP', arg);
    // const res = _fileSystem.allTask()
    // event.sender.send('resAlltasks', res);
    // childWindow.close();
    _database.allfile();
});
electron_1.ipcMain.on('win', function (event, arg) {
    console.log(arg);
    console.log('RECEIVED PING FROM ANGULAR APP', arg);
    // event.sender.send('pong', 'yeah');
    //     createchildWindow();
});
//# sourceMappingURL=main.js.map