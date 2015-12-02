MEANkanji.controller('MainController', function MainController(QuizService, UserService, $mdToast) {
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
  vm.english = false;
  vm.previous = false;

  vm.checkAnswer = function() {
    angular.element(document.querySelector('#question')).fadeOut(500);
    setTimeout(function() {
    if(vm.userAns === vm.question.answerHira) {
      vm.maru = true;
      vm.batsu = false;
    } else if (vm.userAns != vm.question.answerHira) {
      vm.maru = false;
      vm.batsu = true;
    }
    vm.lastQuestion = vm.question;
    vm.lastUserAns = vm.userAns;
    vm.userAns = null;
    vm.showSimpleToast();
    if(UserService.current_user !== "") {
      vm.question = QuizService.get({ 'selected': UserService.current_settings });
    } else {
      vm.question = QuizService.get({ 'selected': ["N3","N4","N5"] });
    }
    angular.element(document.querySelector('#question')).fadeIn(500);
  }, 500);
  };

  vm.toggleEnglish = function() {
    if(vm.english === false) {
      if(angular.element(document.querySelector('#english')).hasClass('flipOutX')) {
        angular.element(document.querySelector('#english')).toggleClass('flipOutX');
      }
      angular.element(document.querySelector('#english')).toggleClass('flipInX');
      vm.english = true;
    } else {
      if(angular.element(document.querySelector('#english')).hasClass('flipInX')) {
        angular.element(document.querySelector('#english')).toggleClass('flipInX');
      }
      angular.element(document.querySelector('#english')).toggleClass('flipOutX');
      vm.english = false;
    }
  };

  // vm.togglePrevious = function() {
  //   if(vm.previous === false) {
  //     if(angular.element(document.querySelector('#previous')).hasClass('fadeOut')) {
  //       angular.element(document.querySelector('#previous')).toggleClass('fadeOut');
  //     }
  //     angular.element(document.querySelector('#previous')).toggleClass('fadeIn');
  //     vm.previous = true;
  //   } else {
  //     if(angular.element(document.querySelector('#previous')).hasClass('fadeIn')) {
  //       angular.element(document.querySelector('#previous')).toggleClass('fadeIn');
  //     }
  //     angular.element(document.querySelector('#previous')).toggleClass('fadeOut');
  //     vm.previous = false;
  //   }
  // };

  vm.togglePrevious = function() {
    if(vm.previous === false) {
      vm.previous = true;
      angular.element(document.querySelector('#previous')).fadeIn();
    } else {
      vm.previous = false;
      angular.element(document.querySelector('#previous')).fadeOut();
    }
  }

  //angular material toasts
  var last = {
      bottom: false,
      top: true,
      left: true,
      right: false
    };
  vm.toastPosition = angular.extend({},last);
  vm.getToastPosition = function() {
    sanitizePosition();
    return Object.keys(vm.toastPosition)
      .filter(function(pos) { return vm.toastPosition[pos]; })
      .join(' ');
  };
  function sanitizePosition() {
    var current = vm.toastPosition;
    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;
    last = angular.extend({},current);
  };
  vm.showSimpleToast = function() {
    if(vm.maru) {
      $mdToast.show(
        $mdToast.simple()
          .textContent('正解　Correct!')
          .position(vm.getToastPosition())
          .hideDelay(3000)
      );
    } else {
      $mdToast.show(
        $mdToast.simple()
          .textContent('✖　Incorrect')
          .position(vm.getToastPosition())
          .hideDelay(3000)
      );
    }
  };
});
