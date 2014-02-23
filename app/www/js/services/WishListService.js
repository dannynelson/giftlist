angular.module('giftlist.services')

.factory('WishListService', function($http, $q) {
  var url = 'http://giftlist-api.herokuapp.com/macys/v3~catalog~category~118~browseproducts?resultsperpage=10';

  return {
    wishList: [],

    getWishList: function() {
      var deferred = $q.defer();

      $http.get(url)
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