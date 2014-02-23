angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, WishListService, macysData) {
  // "Gifts" is a service returning mock data (services.js)
  // $scope.gifts = GiftService.all();
  // $scope.gifts = GiftService.getWishList();
  // debugger;
  // GiftService.getWishList();
  $scope.index = 0;
  $scope.gifts = macysData.category[0].product.product;
  $scope.gift = macysData.category[0].product.product[$scope.index];
  console.log($scope.gifts);

  $scope.nextItem = function () {
    $scope.index++;
    $scope.gift = $scope.gifts[$scope.index];
  };

  $scope.addToWishList = function(gift) {
    $scope.nextItem();
    WishListService.addToWishList(gift);
  };

  $scope.skipItem = function() {
    $scope.nextItem();
  };

  $scope.removeGift = function(swipeDir) {
    console.log("remove gift", swipeDir);
  };
});