angular.module('giftlist.services')

.factory('FirebaseService', function ($location, $state) {
  var giftlist = new Firebase('https://thegiftlist.firebaseio.com/users');

  var auth = new FirebaseSimpleLogin(giftlist, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      // user authenticated with Firebase
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      
      // store or update user's info in firebase
      var usr = {};
      usr[user.id] = {};
      usr[user.id].facebook = user;
      giftlist.update(usr);
      
      // go to search page once logged in
      $state.go('tab.search');
    } else {
      // user is logged out
      console.log('user is logged out');
    }
  });

  var facebookLogin = function () {
    console.log('logging in');
    auth.login('facebook');
  };

  var logout = function () {
    console.log('logging out');
    auth.logout();
  };

  return {
    auth: auth,
    giftlist: giftlist,
    facebookLogin: facebookLogin,
    logout: logout
  };
});