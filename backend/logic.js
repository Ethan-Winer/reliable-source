const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./database');

const db = new Database();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  db.getRandomRows().then((rows) => res.send(rows));
});

app.post('/post', (req, res) => {
  if (req.body.fact != undefined) {
    db.addFact(req);
    res.send(200)
  }
  else {
    res.sendStatus(400);
  }
});

app.post('/report', (req, res) => {
  if (req.body.id != undefined) {
    db.report(req.body.id);
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400)
  }
});

app.listen(8080);