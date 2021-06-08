"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readfile = void 0;
var electron_1 = require("electron");
var fs = require('fs');
var _path = electron_1.app.getPath('home');
function readfile() {
    var _json = fs.readFileSync(_path + "/electron/users.json", 'utf8');
    // _json = JSON.parse(_json)
    console.log(_json);
}
exports.readfile = readfile;
//# sourceMappingURL=file.js.map