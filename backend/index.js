const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

db.run('CREATE TABLE facts (id INTEGER PRIMARY KEY AUTOINCREMENT, fact TEXT)');


//get number of rows in a table
// console.log(db.get("SELECT COUNT(*) as 'count' FROM facts", [], (err, row) => {
//   console.log(row.count);
// }));


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  db.all('SELECT * FROM facts', [], (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

app.post('/', (req, res) => {
  if (req.body.fact != undefined) {
    // db.run('INSERT INTO facts (fact) VALUES (' + req.body.fact + ')')
    db.run("INSERT INTO facts (fact) VALUES ('" + req.body.fact + "')");
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }


});

app.listen(8080);