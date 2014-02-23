angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService, WishListService, macysData) {
  // "Gifts" is a service returning mock data (services.js)
<<<<<<< HEAD
  $scope.gifts = GiftService.all();
  // console.log($scope.gifts);
=======
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

  $scope.addToWishList = function(gift) {
    $scope.nextItem();
    WishListService.addToWishList(gift);
  };

  $scope.skipItem = function() {
    $scope.nextItem();
  };
>>>>>>> 6d491cc5cfa131db68ef6b4e59cc865d7944e302

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