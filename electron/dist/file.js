"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileSystem = void 0;
var electron_1 = require("electron");
var fs = require('fs');
var _path = electron_1.app.getPath('home');
var fileSystem = /** @class */ (function () {
    function fileSystem() {
    }
    fileSystem.prototype.readfile = function () {
        var _json = fs.readFileSync(_path + "/electron/users.json", 'utf8');
        // _json = JSON.parse(_json)
        console.log(_json);
    };
    fileSystem.prototype.allTask = function () {
        var _jsonAlltask;
        try {
            _jsonAlltask = fs.readFileSync(_path + "/electron/task.json", 'utf8');
            return JSON.parse(_jsonAlltask);
        }
        catch (err) {
            console.error(err);
        }
    };
    return fileSystem;
}());
exports.fileSystem = fileSystem;
//# sourceMappingURL=file.js.map