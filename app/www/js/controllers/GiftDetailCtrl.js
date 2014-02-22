angular.module('giftlist.controllers')

.controller('GiftDetailCtrl', function($scope, $stateParams, GiftService) {
  // "Gifts" is a service returning mock data (services.js)
  $scope.gift = GiftService.get($stateParams.giftId);
});