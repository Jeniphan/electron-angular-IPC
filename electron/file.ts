import { app } from 'electron'
const fs = require('fs')

const _path = app.getPath('home');

export class fileSystem {
    readfile() {
        var _json = fs.readFileSync(`${_path}/electron/users.json`, 'utf8')
        // _json = JSON.parse(_json)
        console.log(_json);

    }

    allTask() {
        let _jsonAlltask: any;
        try {
            _jsonAlltask = fs.readFileSync(`${_path}/electron/task.json`, 'utf8')
            return JSON.parse(_jsonAlltask);
        }
        catch (err) {
            console.error(err)
        }
    }
}

