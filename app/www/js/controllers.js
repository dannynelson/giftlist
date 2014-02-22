angular.module('starter.controllers', [])

// Search controller, send's email to our api
.controller('SearchCtrl', function($scope, $ionicLoading, $state, WishListService) {
  $scope.show = function() {
    $scope.loading = $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 500
    });
  };

  $scope.hide = function() {
    $scope.loading.hide();
  };
  
  // send content of email field to api via 
  $scope.sendEmail = function(email) {
    // start spinner
    console.log("inside sendEmail", email);
    $scope.show();

    WishListService.getWishList(email)
      // resoluton of getWishList means that an api request was initiated
      // the server responded with wishList blob and wishList is
      // avail as a property of the WishListService
      // at this point i probably should transition to the next view
      .then(function() {
        // switch to wishList view state
        $scope.hide();
        $state.go('tab.pet-index');
      }, function(data, status) {
        $scope.hide();
        console.log("Error occured during api request", data, status);
      });
  };
})


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = PetService.all();
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
})


// A simple controller that fetches a list of data from a service
.controller('LoginCtrl', function($scope) {
  // "Pets" is a service returning mock data (services.js)
  var chatRef = new Firebase('https://thegiftlist.firebaseio.com');

  var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      // user authenticated with Firebase
      console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
    } else {
      // user is logged out
    }
  });

  $scope.login = function () {
    auth.login('facebook');
  };
});