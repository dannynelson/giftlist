angular.module('giftlist.services')

.factory('FirebaseService', function ($location, $state) {
  
  // ------------------------------------------------
  // Establishing user schema and methods
  // -------------------------------------------
  var user = {};

  var createInfo = function(infoJSON) {
    user.facebook = infoJSON;
  };

  var getUserInfo = function() {
    return user.facebook;
  };

  var addToWishlist = function(itemJSON) {
    user.wishlist.push(itemJSON);
  };

  var getWishlist = function() {
    return user.wishlist;
  };

  // ------------------------------------------------
  // Initialize Firebase and auth
  // ------------------------------------------------
  var giftlist = new Firebase('https://thegiftlist.firebaseio.com/users/');

  var auth = new FirebaseSimpleLogin(giftlist, function(error, fbUser) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (fbUser) {
      // user authenticated with Firebase
      console.log('User ID: ' + fbUser.id + ', Provider: ' + fbUser.provider);

      var userRef = giftlist.child(fbUser.id);

      userRef.on('value', function(dataSnapshot) {
        if (dataSnapshot.val()){
          console.log('USER EXISTS IN FIREBASE');
          console.log(dataSnapshot.val());
        } else {
          console.log('USER IS NOT IN FIREBASE');
          // store or update user's info in firebase
          user[fbUser.id] = {};
          user[fbUser.id].facebook = fbUser;
          user[fbUser.id].wishlist = ['testing', 123];
          giftlist.update(user);
        }
      });


      // go to search page once logged in
      // $state.go('tab.search');
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
    logout: logout,
    getUserInfo: getUserInfo,
    addToWishlist: addToWishlist,
    getWishlist: getWishlist
  };
});