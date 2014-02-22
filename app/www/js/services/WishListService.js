angular.module('giftlist.services')

.factory('WishListService', function($http, $q) {
  var url = 'http://giftlist-api.herokuapp.com/wishlist';

  return {
    wishList: [],

    getWishList: function(email) {
      var deferred = $q.defer();

      $http.get(url + "/" + email)
        .success(function(data) {
          // data may need some processing?
          this.wishList = data;
          console.log(this.wishlist);
          deferred.resolve();
        })
        .error(function(data, status) {
          deferred.reject(data, status);
        });

      return deferred.promise;
    }
  };
});