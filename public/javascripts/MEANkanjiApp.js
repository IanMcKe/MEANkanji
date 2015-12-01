var MEANkanji = angular.module('MEANkanji', ['ui.router', 'ngResource', 'ngMaterial']);

MEANkanji.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "../partials/header.html",
        controller: 'AuthController',
        controllerAs: 'auth'
      },
      'body': {
        templateUrl: "../partials/main.html",
        controller: 'MainController',
        controllerAs: 'vm'
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
        controllerAs: 'auth'
      },
      'body': {
        templateUrl: "../partials/login.html",
        controller: 'AuthController',
        controllerAs: 'auth'
      },
      'footer': {
        templateUrl: "../partials/footer.html"
      }
    }
  });

  $stateProvider.state('register', {
    url: "/register",
    views: {
      'header': {
        templateUrl: "../partials/header.html",
        controller: 'AuthController',
        controllerAs: 'auth'
      },
      'body': {
        templateUrl: "../partials/register.html",
        controller: 'AuthController',
        controllerAs: 'auth'
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
        controllerAs: 'auth'
      },
      'body': {
        templateUrl: "../partials/addQuestion.html",
        controller: "QuestionController",
        controllerAs: 'vm'
      },
      'footer': {
        templateUrl: "../partials/footer.html"
      }
    }
  });
});
