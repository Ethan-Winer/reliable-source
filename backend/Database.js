const sqlite3 = require('sqlite3');
const Promise = require('bluebird');

class Database {

  constructor() {
    this.db = new sqlite3.Database(':memory:');
    let tableFormat = '(id INTEGER PRIMARY KEY AUTOINCREMENT, date INTEGER, ip TEXT, fact TEXT, author TEXT)';
    this.db.run(`CREATE TABLE IF NOT EXISTS approved_facts ${tableFormat}`);
    this.db.run(`CREATE TABLE IF NOT EXISTS pending_facts ${tableFormat}`);
    this.db.serialize();
  }

  getRandomFacts() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT fact, author FROM approved_facts ORDER BY random() LIMIT 20', [], (err, result) => {
        resolve(result);
      });
    });
  }

  addFact(req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    this.db.run(`INSERT INTO pending_facts (date, ip, fact, author) VALUES (${Date.now()}, '${ip}', '${req.body.fact}', '${req.body.author}')`);
    this.db.serialize();
  }

  getPendingFacts() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM pending_facts LIMIT 20', [], (err, result) => {
        resolve(result);
      })
    });
  }

  approve(id) {
    this.db.get(`SELECT * FROM pending_facts WHERE id = ${id}`, [], (err, row) => {
      this.db.run(`INSERT INTO approved_facts (date, ip, fact, author) VALUES (${row.date}, '${row.ip}', '${row.fact}', '${row.author}')`);
      this.db.run(`DELETE FROM pending_facts WHERE id = ${id}`);
      this.db.serialize();
    });
  }

  reject(id) {
    this.db.run(`DELETE FROM pending_facts WHERE id = ${id}`);
    this.db.serialize();
  }
}

module.exports = Database