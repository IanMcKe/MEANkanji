MEANkanji.controller('MainController', function MainController(QuizService) {
  //grabbing a question and checking a user's answer
  var vm = this;
  vm.question = QuizService.get();
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
    vm.question = QuizService.get();
  };

  //angular material checkboxes
  vm.levels = ["N1", "N2", "N3", "N4", "N5", "Katakana", "Hiragana"];
  vm.selected = [];
  vm.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
       list.splice(idx, 1);
    }
    else list.push(item);
    //need to add stuff where this sends vm.selected to the api
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
