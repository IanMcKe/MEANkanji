var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function isAuthenticated (req, res, next){

  //allow all get request methods for quizzes
  if(req.method === "GET") {
    return next();
  }
  if (req.isAuthenticated()){
    return next();
  }

  //if the user is not authenticated then redirect him or her to the login page
  return res.redirect('/#login');
};

router.use('/question', isAuthenticated)

router.route('/question')
  //gets one random question
  .get(function(req, res){
    if(req.query.selected != []) {
      Question.where('level').in(req.query.selected).count().exec(function(err, count) {
        if(err) {
          return res.status(500).send(err);
        }
        var random = Math.floor(Math.random() * count);

        Question.where('level').in(req.query.selected).findOne().skip(random).exec(function(err, question) {
          if(err) {
            console.log(req.query.selected);
            return res.send(500, err);
          }

          return res.status(200).send(question);
        });
      });
    } else {
      Question.count().exec(function(err, count) {
        if(err) {
          return res.status(500).send(err);
        }
        var random = Math.floor(Math.random() * count);

        Question.findOne().skip(random).exec(function(err, question) {
          if(err) {
            return res.send(500, err);
          }
          // console.log(req.query.selected);
          return res.status(200).send(question);
        });
      });
    }
  })

module.exports = router;
