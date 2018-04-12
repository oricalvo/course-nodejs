const {Database} = require("sqlite3");
const {promisify} = require("util");
Database.prototype.all_P = promisify(Database.prototype.all);
Database.prototype.run_P = promisify(Database.prototype.run);

main();

async function main() {
    const db = await connect("1.db");
    const {lastID: id} = await run(db, "INSERT INTO contacts(name) VALUES(?)", ["Tommy"]);
    console.log(id);
    // const rows = await db.all_P("SELECT * from contacts");
    // console.log(rows);
}

function connect(filePath) {
    return new Promise((resolve,reject)=> {
        const db = new Database("1.db", err => {
            if(err) {
                reject(err);
                return;
            }

            resolve(db);
        });
    });
}

function run(db, sql, args) {
    return new Promise((resolve,reject)=> {
        db.run(sql, args, function (err) {
            if (err) {
                reject(err);
                return;
            }

            resolve(this);
        });
    });
}

async function main() {
    const db = await connect("1.db");
    const {lastID: id} = await run(db, "INSERT INTO contacts(name) VALUES(?)", ["Tommy"]);
    console.log(id);
}
