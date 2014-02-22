angular.module('giftlist.directives')

.directive('giftlistSlideBox', ['$timeout', '$compile', '$ionicSlideBoxDelegate', '$ionicGesture', function($timeout, $compile, $ionicSlideBoxDelegate, $ionicGesture) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      doesContinue: '@',
      slideInterval: '@',
      showPager: '@',
      disableScroll: '@',
      onSlideChanged: '&',
      activeSlide: '=?',
      onSwipe: '&'
    },
    controller: ['$scope', '$element', function($scope, $element) {
      var _this = this;

      var continuous = $scope.$eval($scope.doesContinue) === true;
      var slideInterval = continuous ? $scope.$eval($scope.slideInterval) || 4000 : 0;

      var slider = new ionic.views.Slider({
        el: $element[0],
        auto: slideInterval,
        disableScroll: ($scope.$eval($scope.disableScroll) === true) || false,
        continuous: continuous,
        startSlide: $scope.activeSlide,
        slidesChanged: function() {
          $scope.currentSlide = slider.getPos();

          // Try to trigger a digest
          $timeout(function() {});
        },
        callback: function(slideIndex) {
          $scope.currentSlide = slideIndex;
          $scope.onSlideChanged({index:$scope.currentSlide});
          $scope.$parent.$broadcast('slideBox.slideChanged', slideIndex);
          $scope.activeSlide = slideIndex;
          // Try to trigger a digest
          $timeout(function() {});
        }
      });

      $scope.$watch('activeSlide', function(nv) {
        if(angular.isDefined(nv)){
          slider.slide(nv);
        }
      });

      $scope.$on('slideBox.nextSlide', function() {
        slider.next();
      });

      $scope.$on('slideBox.prevSlide', function() {
        slider.prev();
      });

      $scope.$on('slideBox.setSlide', function(e, index) {
        slider.slide(index);
      });

      $scope.$parent.slideBox = slider;

      $ionicSlideBoxDelegate.register($scope, $element);

      this.getNumSlides = function() {
        return slider.getNumSlides();
      };

      $timeout(function() {
        slider.load();
      });

      $ionicGesture.on('swipeleft', function(){
        $scope.onSwipe({swipeDir: "left"});
      }, $element);

      $ionicGesture.on('swiperight', function(){
        $scope.onSwipe({swipeDir: "right"});
      }, $element);
    }],
    template: '<div class="slider">\
            <div class="slider-slides" ng-transclude>\
            </div>\
          </div>',

    link: function($scope, $element, $attr, slideBoxCtrl) {
      // If the pager should show, append it to the slide box
      if($scope.$eval($scope.showPager) !== false) {
        var childScope = $scope.$new();
        var pager = angular.element('<giftlist-pager></giftlist-pager>');
        $element.append(pager);
        $compile(pager)(childScope);
      }
    }
  };
}]);