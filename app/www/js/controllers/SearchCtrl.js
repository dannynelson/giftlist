angular.module('giftlist.controllers')

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
        $state.go('tab.gift-ideas');
      }, function(data, status) {
        $scope.hide();
        console.log("Error occured during api request", data, status);
      });
  };
});
