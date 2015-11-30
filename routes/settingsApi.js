var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

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

router.use('/settings', isAuthenticated)

router.route('/settings')
  .post(function(req, res){
    //updates a user's settings
    User.findOne({ 'username': req.user.username }, function(err, user) {
      if(err) {
        res.send(err);
      }

      // console.log(req.body.settings);
      user.settings = req.body.settings;

      user.save(function(err, user){
        if(err) {
          res.send(err);
        }

        res.json(user);
      });
    });
  });

module.exports = router;
