angular.module('starter.services', [])

.factory('WishListService', function($http, $q) {
  var url = '/search';

  return {
    wishList: [],

    getWishList: function() {
      var deferred = $q.defer();

      $http.get('/search')
        .success(function(data) {
          // data may need some processing?
          this.wishList = data;
          deferred.resolve();
        })
        .failure(function(data, status) {
          deferred.reject(data, status);
        });

      return deferred.promise();
    }
  };
})

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
