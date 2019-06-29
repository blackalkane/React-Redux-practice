var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Messages = new Schema(
  { id: Number,
    data: {
      msg: String} },
  { collection: 'Messages'}
);

let MessagesModel = mongoose.model('Messages', Messages);
const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var messages = [];

MongoClient.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-dzdms.mongodb.net/test?retryWrites=true&w=majority',
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
      messages.push(req.body);
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
         messages = messages.filter((message) => {
           return parseFloat(message.id) !== parseFloat(req.params.id);
         });
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
         messages = [];
       }
     })
   });
});

module.exports = router;
