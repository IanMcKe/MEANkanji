MEANkanji.controller('MainController', function MainController(QuizService, UserService) {
  //grabbing a question and checking a user's answer
  var vm = this;
  if(UserService.current_user !== "") {
    vm.question = QuizService.get({ 'selected': UserService.current_settings });
  } else {
    vm.question = QuizService.get({ 'selected': ["N3","N4","N5"] });
  }
  vm.userAns = null;
  vm.maru = null;
  vm.batsu = null;

  vm.checkAnswer = function() {
    if(vm.userAns === vm.question.answerHira) {
      vm.maru = true;
      vm.batsu = false;
    } else if (vm.userAns != vm.question.answerHira) {
      vm.maru = false;
      vm.batsu = true;
    }
    vm.userAns = null;
    vm.previous = vm.question;
    if(UserService.current_user.username !== "") {
      vm.question = QuizService.get({ 'selected': UserService.current_settings });
    } else {
      vm.question = QuizService.get({ 'selected': ["N3","N4","N5"] });
    }
  };

  //everything below will probably be moved to the auth controller
  //angular material checkboxes
  vm.levels = ["Hiragana", "Katakana", "N1", "N2", "N3", "N4", "N5"];
  vm.selected = [];
  //vm.selected = UserService.current_settings;
  vm.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
    //UserService.newSettings = { settings: list };
    //UserService.updateSettings();
  };
  vm.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

  //anglar material dropdown menu
  var originatorEv;
    vm.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
});
