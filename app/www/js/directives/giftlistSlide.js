angular.module('giftlist.directives')

.directive('giftlistSlide', function() {
  return {
    restrict: 'E',
    require: '^giftlistSlideBox',
    compile: function(element, attr) {
      element.addClass('slider-slide');
      return function($scope, $element, $attr) {};
    },
  };
});