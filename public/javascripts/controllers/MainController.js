MEANkanji.controller('MainController', function MainController(QuizService) {
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
    vm.question = QuizService.get();
  };
});
