var mongoose = require('mongoose');
var User = mongoose.model('User');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {

  // Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function(user, done) {
    console.log('serializing user:', user.username);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializing user', user.username);
      done(err, user);
    });
  });

  passport.use('login', new LocalStrategy({
      passReqToCallback: true
    },
    function(req, username, password, done) {
      User.findOne({ 'username': username },
        function(err, user) {
          if(err) {
            return done(err);
          }

          if(!user){
            console.log('User not found with username ' + username);
            return done(null, false);
          }

          if(!isValidPassword(user, password)) {
            console.log('Invalid password');
            return done(null, false);
          }

          // if(user.username === "admin" && isValidPassword(user, password)) {
          //   console.log('Welcome admin');
          //
          //   return done(null, user);
          // }
          return done(null, user);
        }
      );
    }
  ));

  passport.use('signup', new LocalStrategy({
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
      User.findOne({ 'username' : username }, function(err,user) {
        if(err){
          console.log('Error in signup: ' +err);
          return done(err);
        }

        if(user) {
          console.log('User already exists with username: ' +username);
          return done(null, false);
        } else {
          var newUser = new User();

          newUser.username = username;
          newUser.password = createHash(password);

          newUser.save(function(err) {
            if(err) {
              console.log('Error in saving user:' +err);
              throw err;
            }

            console.log(newUser.username + ' registration successful');
            return done(null, newUser);
          });
        }
      });
    }
  ));

  var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password);
  };

  var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  };

};
