const express = require('express');
const router = express.Router();
const Database = require('./Store');

const messages = [
  { msg: "Let's Go Raptors!!!" },
  { msg: 'GSW Sucks!!!' }
];

const db = new Database(messages);

router.get('/', function(req, res, next) {
  res.json(db.getAll());
});

router.post('/add', function(req, res, next) {
  const msg = req.body.msg;
  if (!isEmpty(msg)) {
    const m = db.add({ msg });
    return res.status(200).json(m);
  } else {
    return res.status(400).send('Something went wrong!!!');
  }
});

router.delete('/remove/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  if (db.delete(id)) {
    res.status(200).send('Message has been removed.');
  } else {
    res.status(500).send('Failed to remove the message!');
  }
});

router.delete('/clear-all', function(req, res, next) {
  db.clearAll();
  if (db.getAll().length === 0) {
    res.status(200).send('DB has bean cleared.');
  } else {
    res.status(400).send('Failed to clear DB!');
  }
});

module.exports = router;
