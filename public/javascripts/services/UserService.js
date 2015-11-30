MEANkanji.factory('UserService', function UserService($http, $state) {
  var factory = {};
  factory.authenticated = false;
  factory.current_user = '';
  // factory.current_settings = '';

  factory.user = {username: '', password: ''};
  factory.error_message = '';

  factory.login = function() {
    $http.post('/auth/login', factory.user).success(function(data) {
      if(data.state == 'success'){
        factory.authenticated = true;
        factory.current_user = data.user.username;
        $state.go('home');
      } else {
        factory.error_message = data.message;
        console.log(factory.error_message);
      }
    });
  };

  factory.register = function() {
    $http.post('/auth/signup', factory.user).success(function(data) {
      if(data.state == 'success'){
        factory.authenticated = true;
        factory.current_user = data.user.username;
        $state.go('home');
      } else {
        factory.error_message = data.message;
        console.log(factory.error_message);
      }
    });
  };

  factory.signout = function () {
    $http.get('/auth/signout');
    factory.authenticated = false;
    factory.current_user = '';
  };

  // updates user settings
  // factory.updateSettings = function() {
  //   if(factory.authenticated === true && factory.current_user != ''){
  //     $http.post('/quizApi/settings', factory.newSettings).success(function(data) {
  //       if(data.state == 'success') {
  //         factory.current_settings = data.user.settings;
  //       } else {
  //         factory.error_message = data.message;
  //         console.log(factory.error_message);
  //       }
  //     });
  //   }
  // }

  return factory;
});
