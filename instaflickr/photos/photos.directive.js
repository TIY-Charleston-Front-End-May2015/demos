(function () {
  'use strict';
  angular
    .module('photos')
    .directive('instaPhoto', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'photos/views/instaPhoto.directive.html',
        scope: {
          p: '=',
          extra: '@'
        }
      };
    });
})();
