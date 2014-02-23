angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, WishListService, macysData) {
  // "Gifts" is a service returning mock data (services.js)
  // $scope.gifts = GiftService.all();
  // $scope.gifts = GiftService.getWishList();
  // debugger;
  // GiftService.getWishList();
  $scope.gifts = macysData.category[0].product.product;
  $scope.currentGift = macysData.category[0].product.product[0];
  console.log($scope.gifts);

  $scope.addToWishList = WishListService.addToWishList;

  $scope.removeGift = function(swipeDir) {
    console.log("remove gift", swipeDir);
  };
});