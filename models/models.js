var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
  beforeAns: {type: String, default: ''},
  answerKanji: String,
  answerHira: String,
  answerRoma: String,
  afterAns: {type: String, default: ''},
  level: String,
  ansTrans: String,
  fullTrans: {type: String, default: ''},
  created_at: {type: Date, default: Date.now}
});

var userSchema = new mongoose.Schema({
  username: String,
  password: String, //hash created from password
  settings: { type: Array, default: ["N3", "N4", "N5"] },
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Question', questionSchema);
mongoose.model('User', userSchema);
