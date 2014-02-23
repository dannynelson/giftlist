// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('giftlist.controllers', []);
angular.module('giftlist.services', []);
angular.module('giftlist.directives', []);

angular.module('giftlist', ['ionic', 'firebase', 'giftlist.services', 'giftlist.controllers', 'giftlist.directives'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the gift ideas tab has its own child nav-view and history
    .state('tab.gift-ideas', {
      url: '/gift-ideas',
      views: {
        'gift-ideas-tab': {
          templateUrl: 'templates/gift-ideas-index.html',
          controller: 'GiftIndexCtrl'
        }
      }
    })

    .state('tab.gift-detail', {
      url: '/gift/:giftId',
      views: {
        'gift-ideas-tab': {
          templateUrl: 'templates/gift-detail.html',
          controller: 'GiftDetailCtrl'
        }
      }
    })

    .state('tab.search', {
      url: '/search',
      views: {
        'search-tab': {
          templateUrl: 'templates/search.html',
          controller: "SearchCtrl"
        }
      }
    })

    .state('tab.browse', {
      url: '/browse',
      views: {
        'browse-tab': {
          templateUrl: 'templates/browse.html',
          controller: "BrowseCtrl"
        }
      },
      // resolve: {
      //   macysData: function (MacysService) {
      //     return MacysService.getMacysData()
      //   }
      // }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/browse');

});

