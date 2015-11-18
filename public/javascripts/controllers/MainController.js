MEANkanji.controller('MainController', function MainController(QuizService) {
  var vm = this;
  vm.question = QuizService.get();
});
