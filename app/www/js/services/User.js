angular.module('giftlist.services')

.factory('User', function($firebase) {
  var user = {
    facebook: {},
    wishlist: []
  };
  return {
    createInfo: function(infoJSON) {
      user.facebook = infoJSON;
    },
    getUserInfo: function() {
      return user.facebook;
    },
    addToWishlist: function(itemJSON) {
      user.wishlist.push(itemJSON);
    },
    getWishlist: function() {
      return user.wishlist;
    },
    save: function
  };
});
