(function () {
  'use strict';
  angular
    .module('photos')
    .controller('PhotoController', function ($scope, PhotoService, $routeParams) {
      var vm = this;
      PhotoService.getPhotos().then(function (photos) {

        vm.photos = photos;
      });
      $scope.random = {id: 21, image: 'http://www.placecage.com/c/300/300', title: 'demo data', dt: null};
      if($routeParams.photoId) {
      PhotoService.getPhoto($routeParams.photoId).then(function (photo) {
        vm.photo = photo;
      });
      }

    });
})();
