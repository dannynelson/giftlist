angular.module('giftlist.services')


.factory('MacysService', function ($location, $state, $http, $q) {
  var url = 'http://api.macys.com/v3/catalog/category/118/browseproducts?resultsperpage=10';
  var apiKey = 'hackathon';
  // var macysGenderId = {
  //   male: 1,
  //   female: 118
  // }
  debugger;
  $http.defaults.headers.common['X-Macys-Webservice-Client-Id'] = apiKey;
  $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  return {
    getMacysData: function() {
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
  }

});
