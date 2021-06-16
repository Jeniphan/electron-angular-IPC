import { app, BrowserWindow, ipcMain } from 'electron'
import * as url from 'url'
import * as path from 'path'
// import * as file from './file'
import { fileSystem } from "./file"
import { database } from "./db"


let win: BrowserWindow
let childWindow: BrowserWindow;
const _fileSystem = new fileSystem()
const _database = new database()


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

function createchildWindow() {
    childWindow = new BrowserWindow({
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

    childWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/../../childwindow/app.html`),
            protocol: 'file:',
            slashes: true,
        })
    );

    childWindow.once("ready-to-show", () => {
        childWindow.show();
    });

    childWindow.webContents.openDevTools()

    childWindow.on('close', () => {
        childWindow = null!;
    })


}

ipcMain.on('allTasks', (event, arg) => {
    console.log('RECEIVED PING FROM HTML APP', arg);

    // const res = _fileSystem.allTask()
    // event.sender.send('resAlltasks', res);
    // childWindow.close();
    _database.allfile();

});

ipcMain.on('win', (event, arg) => {
    console.log(arg)
    console.log('RECEIVED PING FROM ANGULAR APP', arg);
    // event.sender.send('pong', 'yeah');
    //     createchildWindow();
})


