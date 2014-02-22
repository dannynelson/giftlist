angular.module('giftlist.controllers')

// A simple controller that fetches a list of data from a service
.controller('LoginCtrl', function($scope, $firebase, FirebaseService) {
  // "Pets" is a service returning mock data (services.js)

  $scope.login = FirebaseService.facebookLogin;
  $scope.logout = FirebaseService.logout;

  $scope.add = function () {
      // $scope.giftlist = $firebase(FirebaseService.giftlist);
      // $scope.addPerson = function() {
        // AngularFire $add method
        // $scope.people.$add($scope.newPerson);
        //or add a new person manually
      FirebaseService.giftlist.update({name: 'Alex', age: 35});
     
      //   $scope.newPerson = "";
      // }
  };
});