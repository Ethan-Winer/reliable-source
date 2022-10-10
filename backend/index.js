const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(':memory:');

// const db = new sqlite3.Database('./facts.db');

var factList = [];

db.run('CREATE TABLE IF NOT EXISTS facts (id INTEGER PRIMARY KEY AUTOINCREMENT, date INTEGER, ip INTEGER, fact TEXT, reports INTEGER)');

db.serialize()

for (let i = 0; i < 19; i++) {
  db.run("INSERT INTO facts (fact) VALUES ('" + i + "')");

}



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  let start = Date.now();
  //chooses a set of rows in order
  // db.get("SELECT COUNT(*) as 'count' FROM facts", [], (err, count) => {
  // let rand = Math.floor(Math.random() * (row.count - 20));
  // console.log(rand);
  // db.all("SELECT * FROM facts LIMIT " + rand + ", 20", [], (err, rows) => {
  //   res.send(rows);
  // });
  // console.log(Date.now() - start);
  db.all('SELECT * FROM facts ORDER BY random() LIMIT 20', [], (err, rows) => {
    console.log(Date.now() - start);
    console.log(rows);
    res.send(rows);

  });
});


app.post('/post', (req, res) => {
  if (req.body.fact != undefined) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    db.run("INSERT INTO facts (date, ip, fact, reports) VALUES ('" + Date.now() + "', '" + ip + "', '" + req.body.fact + "', 0)");
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }
});

app.post('/report', (req, res) => {
  if (req.body.id != undefined) {
    db.get('SELECT reports FROM facts WHERE id = ' + req.body.id, [], (err, row) => {
      if (row == undefined || row.reports > 3) {
        db.run('DELETE FROM facts WHERE id = ' + req.body.id);
      }
      else {
        db.run('UPDATE facts SET reports = reports + 1 WHERE id = ' + req.body.id);
      }
    });
    res.sendStatus(200)
  }
});

app.listen(8080);