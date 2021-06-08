import { app } from 'electron'
const fs = require('fs')

const _path = app.getPath('home');

export function readfile() {
    var _json = fs.readFileSync(`${_path}/electron/users.json`, 'utf8')
    // _json = JSON.parse(_json)
    console.log(_json);

}