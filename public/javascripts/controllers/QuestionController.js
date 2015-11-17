MEANkanji.controller('QuestionController', function QuestionController(QuestionService) {
  var vm = this;
  vm.newQuestion = {
    beforeAns: '',
    answerKanji: '',
    answerHira: '',
    afterAns: '',
    level: '',
    ansTrans: '',
    fullTrans: ''
  }
  vm.QuestionService = QuestionService;

  vm.addQuestion = function() {
    vm.newQuestion.created_at = Date.now();
    QuestionService.save(vm.newQuestion, function() {
      vm.newQuestion = {
        beforeAns: '',
        answerKanji: '',
        answerHira: '',
        afterAns: '',
        level: '',
        ansTrans: '',
        fullTrans: ''
      }
    });
  };
});
