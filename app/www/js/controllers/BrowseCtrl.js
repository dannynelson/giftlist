angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, WishListService, macysData) {
  // "Gifts" is a service returning mock data (services.js)
  // $scope.gifts = GiftService.all();
  // $scope.gifts = GiftService.getWishList();
  // debugger;
  // GiftService.getWishList();
  $scope.gifts = macysData.category[0].product.product;
  $scope.gift = macysData.category[0].product.product[GiftService.productIndex];
  console.log($scope.gifts);

  $scope.nextItem = function () {
    GiftService.productIndex++;
    $scope.gift = $scope.gifts[GiftService.productIndex];
  };

  $scope.addToWishList = function() {
    $scope.nextItem();
    WishListService.addToWishList();
  };

  $scope.skipItem = function() {
    $scope.nextItem();
  };

  $scope.removeGift = function(swipeDir) {
    console.log("remove gift", swipeDir);
  };
});