angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0,
      title: 'The Innovator\'s Dilemma',
      description: 'The Revolutionary Book That Will Change the Way You Do Business.',
      img: 'http://ecx.images-amazon.com/images/I/41x2I-hjJQL._SY344_PJlook-inside-v2,TopRight,1,0_SH20_BO1,204,203,200_.jpg'
    },
    { id: 1,
      title: 'Business Model Generation',
      description: 'A Handbook for Visionaries, Game Changers, and Challengers.',
      img: 'http://ecx.images-amazon.com/images/I/51jX9F1kXXL._SX258_PJlook-inside-v2,TopRight,1,0_SH20_BO1,204,203,200_.jpg'
    },
    { id: 2,
      title: 'Miike Snow (Vinyl)',
      description: 'Miike Snow is – are – in a playful mood. The second, somewhat orchatronic, album by the three-headed-band with the one-man-name and mysterious Jackalope symbol is called Happy To You.',
      img: 'http://ecx.images-amazon.com/images/I/51nbulxotlL._SL500_AA280_.jpg'
    },
    { id: 3,
      title: 'Anker® Astro 5600mAh External Battery Backup Charger',
      description: 'with Built-In Flashlight for iPhone 5S, 5C, 5, 4S, 4, Samsung Galaxy S4, S3, Note 2, Note 3, HTC One, Motorola Droid, MOTO X, LG Optimus and most other smartphones and USB-charged devices (Apple adapters - 30 pin and lightning, not included).',
      img: 'http://ecx.images-amazon.com/images/I/41h5-B64EEL._SY300_.jpg'
    }
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
