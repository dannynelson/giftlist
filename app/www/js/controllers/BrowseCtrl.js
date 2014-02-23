angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gifts = GiftService.all();

  $scope.removeGift = function(swipeDir) {
    // pop gift from the potential gift list
    // depending on the direction of the swipe
    // the gift is either tossed away (swipe left) or
    // stored in wishlist (swipe right)

    console.log("remove gift", swipeDir);
    console.log($scope.gifts.shift());
    console.log($scope.gifts);
    //
  };
});