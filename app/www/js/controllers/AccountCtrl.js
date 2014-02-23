angular.module('giftlist.controllers')

.controller('AccountCtrl', function($scope, $firebase, FirebaseService) {
  $scope.logout = FirebaseService.logout;
});
