angular.module('giftlist.controllers')

.controller('GiftDetailCtrl', function($scope, $stateParams, WishListService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gift = WishListService.getWishListItem($stateParams.giftId);
});