var mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://heroku_p5bdrkqr:cu020famgkuhgqh45mt3et68at@ds349857.mlab.com:49857/heroku_p5bdrkqr',
  { useNewUrlParser: true }, function(err, db) {
  var dbase = db.db("Messages");
  // fetch
  router.get('/', function(req, res, next){
    dbase.collection('Messages').find().toArray(function(err, message){
      if (err){
        console.log(err);
      } else {
        res.json(message);
      }
    });
  });
  // add
  router.post('/add', function(req, res, next) {
    dbase.collection('Messages').insertOne({id: req.body.id, data: {msg: req.body.msg}}, function(err, message){
      if (err){
        console.log(err);
      } else{
      res.json(req.body);
    }
  });
  });
  // delete one
   router.delete('/delete/:id', function(req, res, next) {
     dbase.collection('Messages').deleteOne({id: req.params.id}, function(err, m){
       if (err){
         console.log(err);
       } else{
         res.json(req.param.id);
       }
     });
   });
   // delete all
   router.delete('/killAll', function(req, res, next) {
     dbase.collection('Messages').drop({}, function(err, message) {
       if (err) {
         console.log(err);
       } else {
         console.log("gg");
       }
     })
   });
});

module.exports = router;
