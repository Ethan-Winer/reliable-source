const express = require('express');
const Database = require('./Database');

const db = new Database();

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.get('/get-facts', (req, res) => {
  db.getRandomFacts().then((rows) => res.send(rows));
});

app.post('/post-fact', (req, res) => {
  console.log(req.body);
  if (req.body.fact != undefined) {
    db.addFact(req);
    res.sendStatus(200);
  }
  else {
    res.sendStatus(400);
  }
});

app.get('/get-pending', (req, res) => {
  db.getPendingFacts().then((facts) => res.send(facts));
});

app.post('/approve-fact', (req, res) => {
  let id = req.body.id;
  db.approve(id);
  res.sendStatus(200);
});

app.post('/reject-fact', (req, res) => {
  let id = req.body.id;
  db.reject(id);
  res.sendStatus(200);
});

app.listen(5000);