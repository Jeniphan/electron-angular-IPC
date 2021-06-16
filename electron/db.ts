var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('electron/database.db');

export class database {
    allfile() {
        db.all("SELECT * FROM users", (error: any, res: any) => {
            if (error) {
                console.error(error.message);

            }
            else {
                console.log(`Success ${res}`);
            }
        })
    }

}