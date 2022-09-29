const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

var factList = [];


db.run('CREATE TABLE facts (id INTEGER PRIMARY KEY AUTOINCREMENT, fact TEXT)');

db.serialize();

// for (let i = 0; i < 100; i++) {
//   db.run("INSERT INTO facts (fact) VALUES ('test" + i + "')");

// }



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  db.get("SELECT COUNT(*) as 'count' FROM facts", [], (err, row) => {
    let rand = Math.floor(Math.random() * (row.count - 20));
    console.log(rand);
    db.all("SELECT * FROM facts LIMIT " + rand + ", 20", [], (err, rows) => {
      res.send(rows);

    });
  });
});


app.post('/', (req, res) => {
  if (req.body.fact != undefined) {
    db.run("INSERT INTO facts (fact) VALUES ('" + req.body.fact + "')");
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }
});

app.listen(8080);


// setInterval(() => {
//   db.get("SELECT COUNT(*) as 'count' FROM facts", [], (err, row) => {
//     let rand = Math.floor(Math.random() * (row.count - 20));
//     console.log(rand);
//     db.all("SELECT * FROM facts LIMIT " + rand + ", 20", [], (err, rows) => {
//       console.log(rows);
//     });

//   });

// }, 1000);