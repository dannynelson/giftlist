angular.module('giftlist.controllers')

.controller('BrowseCtrl', function($scope, GiftService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gifts = GiftService.all();

  $scope.removeGift = function(swipeDir) {
    console.log("remove gift", swipeDir);
  };
});