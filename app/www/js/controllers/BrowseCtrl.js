angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, WishListService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gifts = GiftService.all();
  // console.log($scope.gifts);

  $scope.removeGift = function(swipeDir) {
    // pop gift from the potential gift list
    // depending on the direction of the swipe
    // the gift is either tossed away (swipe left) or
    // stored in wishlist (swipe right)

    // var gift = $scope.gifts.shift();
    // console.log(gift);
    if (swipeDir === "right") {
      $scope.wishList.push(gift);
    }
    console.log($scope.gifts);
  };
});