angular.module('giftlist.controllers')

.controller('LoginCtrl', function($scope, $firebase, FirebaseService) {
  $scope.login = FirebaseService.facebookLogin;
});