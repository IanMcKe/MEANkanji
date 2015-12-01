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
    if(UserService.current_user !== "") {
      vm.question = QuizService.get({ 'selected': UserService.current_settings });
    } else {
      vm.question = QuizService.get({ 'selected': ["N3","N4","N5"] });
    }
  };
});
