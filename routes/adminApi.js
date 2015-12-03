var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = mongoose.model('Question');

// function isAuthenticated (req, res, next){
//
//   //allow all get request methods
//   if(req.method === "GET") {
//     return next();
//   }
//   if (req.isAuthenticated()) {
//     return next();
//   }
//
//   //if the user is not authenticated then redirect him or her to the login page
//   return res.redirect('/#login');
// };

function isAdmin (req, res, next){
  if(req.isAuthenticated() && req.user.username === "admin") {
    return next();
  }

  return res.redirect('/#login');
}
//Register the authentication middleware
router.use('/questionCRUD', isAdmin);

router.route('/questionCRUD')

  //adds new question
  .post(function(req, res){
    var question = new Question();
    question.beforeAns = req.body.beforeAns;
    question.answerKanji = req.body.answerKanji;
    question.answerHira = req.body.answerHira;
    question.answerRoma = req.body.answerRoma;
    question.afterAns = req.body.afterAns;
    question.level = req.body.level;
    question.ansTrans = req.body.ansTrans;
    question.fullTrans = req.body.fullTrans;

    question.save(function(err, post){
      if(err){
        return res.send(500, err);
      }
      return res.json(question);
    });
  })

  //gets all questions
  .get(function(req, res){
    Question.find(function(err, questions) {
      if(err) {
        return res.send(500, err);
      }
      return res.send(200, questions);
    });
  })

  //update existing question
  .put(function(req, res){
    Question.findById(req.params.id, function(err, question){
      if(err){
        res.send(err);
      }

      question.beforeAns = req.body.beforeAns;
      question.answerKanji = req.body.answerKanji;
      question.answerHira = req.body.answerHira;
      question.afterAns = req.body.afterAns;
      question.level = req.body.level;
      question.ansTrans = req.body.ansTrans;
      question.fullTrans = req.body.fullTrans;

      question.save(function(err, question){
        if(err){
          res.send(err);
        }
        res.send(question);
      });
    });
  })

  .delete(function(req, res){
    Question.remove({
      _id: req.params.id
    }, function(err){
      if(err){
        res.send(err);
      }
      res.json("question deleted");
    });
  });

module.exports = router;
