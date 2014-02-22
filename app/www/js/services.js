angular.module('starter.services', [])

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
})

/**
 * A simple example service that returns some data.
 */
.factory('GiftService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var gifts = [
    { id: 0,
      title: 'The Innovator\'s Dilemma',
      description: 'The Revolutionary Book That Will Change the Way You Do Business.',
      img: 'http://ecx.images-amazon.com/images/I/41x2I-hjJQL._SY344_PJlook-inside-v2,TopRight,1,0_SH20_BO1,204,203,200_.jpg',
      price: 17.99
    },
    { id: 1,
      title: 'Business Model Generation',
      description: 'A Handbook for Visionaries, Game Changers, and Challengers.',
      img: 'http://ecx.images-amazon.com/images/I/51jX9F1kXXL._SX258_PJlook-inside-v2,TopRight,1,0_SH20_BO1,204,203,200_.jpg',
      price: 28.99
    },
    { id: 2,
      title: 'Miike Snow (Vinyl)',
      description: 'Miike Snow is – are – in a playful mood. The second, somewhat orchatronic, album by the three-headed-band with the one-man-name and mysterious Jackalope symbol is called Happy To You.',
      img: 'http://ecx.images-amazon.com/images/I/51nbulxotlL._SL500_AA280_.jpg',
      price: 19.99
    },
    { id: 3,
      title: 'Anker® Astro 5600mAh External Battery Backup Charger',
      description: 'with Built-In Flashlight for iPhone 5S, 5C, 5, 4S, 4, Samsung Galaxy S4, S3, Note 2, Note 3, HTC One, Motorola Droid, MOTO X, LG Optimus and most other smartphones and USB-charged devices (Apple adapters - 30 pin and lightning, not included).',
      img: 'http://ecx.images-amazon.com/images/I/41h5-B64EEL._SY300_.jpg',
      price: 24.99
    }
  ];

  return {
    all: function() {
      return gifts;
    },
    get: function(giftId) {
      // Simple index lookup
      return gifts[giftId];
    }
  }
});
