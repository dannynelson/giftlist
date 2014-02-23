angular.module('giftlist.services')

.factory('WishListService', function($http, $q, $firebase, FirebaseService) {
  // var url = 'http://giftlist-api.herokuapp.com/macys/v3~catalog~category~118~browseproducts?resultsperpage=10';

  // return {
  //   wishList: [],

  //   getWishList: function() {
  //     var deferred = $q.defer();

  //     $http.get(url)
  //       .success(function(data) {
  //         // data may need some processing?
  //         this.wishList = data;
  //         console.log(this.wishlist);
  //         deferred.resolve();
  //       })
  //       .error(function(data, status) {
  //         deferred.reject(data, status);
  //       });

  //     return deferred.promise;
  //   }
  // };
  // 
  // debugger;
  // var wishListRef = FirebaseService.userRef.child('wishlist');
  var wishList = [];

  // var wishListRef = FirebaseService.wishListRef;
  // var wishlistRef = $firebase(FirebaseService.wishlistRef);
  // var wishList = [];

  return {
    addToWishList: function(currentGift) {
      wishList.push(currentGift);
    },
    getWishList: function() {
      return wishList;
    }
    // wishList: wishList
  };
});

// var wishlistRef = $firebase(FirebaseService.wishlistRef);
// // var wishList = [];

// return {
//   addToWishList: function(currentGift) {
//     debugger;
//     wishListRef.$add(currentGift);
//   },
//   getWishList: function() {
//     return wishListRef;
//   }
// };