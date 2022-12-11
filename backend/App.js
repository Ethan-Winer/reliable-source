const express = require('express');
const Database = require('./Database');
const path = require('path');

const db = new Database();

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json());


app.get('/get-facts', (req, res) => {
  db.getRandomFacts().then((rows) => res.send(rows));
});

app.post('/post-fact', (req, res) => {
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

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, './admin-panel/index.html'));
});

app.get('/get-all-facts', (req, res) => {
  db.getAllFacts().then((facts) => res.send(facts));
});

app.listen(5000);