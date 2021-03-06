var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./models/models.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kanji-test');
var index = require('./routes/index');
var adminApi = require('./routes/adminApi');
var quizApi = require('./routes/quizApi');
var settingsApi = require('./routes/settingsApi');
var auth = require('./routes/auth')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-ui-router', express.static(__dirname + '/node_modules/angular-ui-router/build/'));
app.use('/angular-resource', express.static(__dirname + '/node_modules/angular-resource/'));
app.use('/angular-aria', express.static(__dirname + '/node_modules/angular-aria/'));
app.use('/angular-animate', express.static(__dirname + '/node_modules/angular-animate/'));

app.use(logger('dev'));
app.use(session({
  secret: 'example-secret'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

//initialize passport
var initPassport = require('./passport-init');
initPassport(passport);

app.use('/', index);
app.use('/adminApi', adminApi);
app.use('/quizApi', quizApi);
app.use('/settingsApi', settingsApi);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
