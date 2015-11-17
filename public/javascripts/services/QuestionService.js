MEANkanji.factory('QuestionService', function QuestionService($resource) {
  return $resource('/adminApi/questionCRUD');
});
