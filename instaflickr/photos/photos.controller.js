(function () {
  'use strict';
  angular
    .module('photos')
    .controller('PhotoController', function ($scope, PhotoService,LikesService, $routeParams) {
      var vm = this;
      PhotoService.getPhotos().then(function (photos) {
        console.log(photos);
        vm.photos = photos;
      });
      $scope.extra = "this is extra";
      $scope.addLike = function (photo) {
        LikesService.addLike(photo);
      };
      $scope.logStuff = function (title) {
        console.log('this is executing logStuff in PhotoController', title);
      };
      $scope.random = {id: 21, image: 'http://www.placecage.com/c/300/300', title: 'demo data', dt: null};
      if($routeParams.photoId) {
      PhotoService.getPhoto($routeParams.photoId).then(function (photo) {
        vm.photo = photo;
      });
      }

    });
})();
