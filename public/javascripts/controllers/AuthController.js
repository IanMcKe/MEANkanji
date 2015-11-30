MEANkanji.controller('AuthController', function AuthController(UserService) {
  var auth = this;
  auth.UserService = UserService;

  //everything below will probably be moved to the auth controller
  //angular material checkboxes
  auth.levels = ["Hiragana", "Katakana", "N1", "N2", "N3", "N4", "N5"];
  if(auth.UserService.current_user != ''){
    auth.selected = auth.UserService.current_settings;
  } else {
    auth.selected = [];
  }
  // auth.selected = [];
  auth.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
    auth.UserService.current_settings = list;
    auth.UserService.newSettings = { settings: list };
    auth.UserService.updateSettings();
  };
  auth.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

  //anglar material dropdown menu
  var originatorEv;
    auth.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
});
