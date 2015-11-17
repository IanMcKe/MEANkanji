var MEANkanji = angular.module('MEANkanji', ['ui.router', 'ngResource']);

MEANkanji.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "../partials/header.html",
        controller: 'AuthController',
        controllerAs: 'vm'
      },
      'body': {
        templateUrl: "../partials/main.html"
      },
      'footer': {
        templateUrl: "../partials/footer.html"
      }
    }
  });

  $stateProvider.state('login', {
    url: "/login",
    views: {
      'header': {
        templateUrl: "../partials/header.html",
        controller: 'AuthController',
        controllerAs: 'vm'
      },
      'body': {
        templateUrl: "../partials/login.html",
        controller: 'AuthController',
        controllerAs: 'vm'
      },
      'footer': {
        templateUrl: "../partials/footer.html"
      }
    }
  });

  $stateProvider.state('addQuestion', {
    url: "/addQuestion",
    views: {
      'header': {
        templateUrl: "../partials/header.html",
        controller: 'AuthController',
        controllerAs: 'vm'
      },
      'body': {
        templateUrl: "../partials/addQuestion.html",
        controller: "QuestionController",
        controllerAs: "vm"
      },
      'footer': {
        templateUrl: "../partials/footer.html"
      }
    }
  });
});
