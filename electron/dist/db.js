"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('electron/database.db');
var database = /** @class */ (function () {
    function database() {
    }
    database.prototype.allfile = function () {
        db.all("SELECT * FROM users", function (error, res) {
            if (error) {
                console.error(error.message);
            }
            else {
                console.log("Success " + res);
            }
        });
    };
    return database;
}());
exports.database = database;
//# sourceMappingURL=db.js.map