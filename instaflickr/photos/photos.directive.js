(function () {
  'use strict';
  angular
    .module('photos')
    .directive('instaPhoto', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'photos/views/instaPhoto.directive.html',
        transclude: true,
        replace: true,
        scope: {
          p: '=',
          extra: '@',
          action: '&',
          action2: '&'
        },
        link: function (scope, element, attributes) {
          // element.find('header').find('a').on('mouseover', function () {
          //   scope.url = 'http://www.placecage.com/c/400/600';
          //   scope.$apply();
          // });

          // element.on('click', function (e) {
          //   e.preventDefault();
          //   console.log(attributes.calvin);
          //   element.find('img').toggleClass('grow');
          // });

        }
      };
    });
})();
