const sqlite3 = require('sqlite3');
const Promise = require('bluebird');

class Database {

  // const db = new sqlite3.Database('./facts.db');
  constructor() {
    this.db = new sqlite3.Database(':memory:');
    this.db.run('CREATE TABLE IF NOT EXISTS facts (id INTEGER PRIMARY KEY AUTOINCREMENT, date INTEGER, ip INTEGER, fact TEXT, reports INTEGER)');
    this.db.serialize()
    // for (let i = 0; i < 19; i++) {
    //   this.db.run("INSERT INTO facts (fact, reports) VALUES ('" + i + "', 0)");

    // }
    // this.db.serialize();
  }

  getRandomRows() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM facts ORDER BY random() LIMIT 20', [], (err, result) => {
        resolve(result);
      });
    });
  }

  addFact(req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    this.db.run("INSERT INTO facts (date, ip, fact, reports) VALUES ('" + Date.now() + "', '" + ip + "', '" + req.body.fact + "', 0)");
  }

  report(id) {
    let sql = `SELECT reports FROM facts WHERE id = ${id}`;
    this.db.get(sql, [], (err, row) => {
      if (row == undefined) {
        return;
      }
      else if (row.reports >= 3) {
        this.db.run(`DELETE FROM facts WHERE id = ${id}`);
      }
      else {
        this.db.run(`UPDATE facts SET reports = reports + 1 WHERE id = ${id}`);
      }
    });
  }
}

module.exports = Database