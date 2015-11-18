MEANkanji.factory('QuizService', function QuizService($resource) {
  return $resource('/quizApi/question');
});
