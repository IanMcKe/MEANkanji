var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function isGet (req, res, next){

  //allow all get request methods for quizzes
  if(req.method === "GET") {
    return next();
  }

  //if the user is not authenticated then redirect him or her to the login page
  return res.redirect('/#login');
};

router.use('/question', isGet)

router.route('/question')
  //gets one random question of a certain level
  .get(function(req, res){
    Question.count().exec(function(err, count) {
      if(err) {
        return res.send(500, err);
      }

      var random = Math.floor(Math.random() * count);

      Question.findOne().skip(random).exec(function(err, question) {
        if(err) {
          return res.send(500, err);
        }

        return  res.send(200, question);
      });
    });

  })

module.exports = router;
