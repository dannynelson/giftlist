angular.module('giftlist.controllers')

// A simple controller that fetches a list of data from a service
.controller('GiftIndexCtrl', function($scope, GiftService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gifts = GiftService.all();
});
