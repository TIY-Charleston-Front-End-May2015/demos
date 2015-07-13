(function () {
  'use strict';
  angular
    .module('likes')
    .controller('LikesController', function ($scope, LikesService, $location) {
      var vm = this;
    if($location.url() === '/likes') {
      LikesService.getLikes().success(function (likes) {
        vm.likes = likes;
      });
    }

      vm.addLike = function (photo) {
        LikesService.addLike(photo);
      };
      vm.justAlertMe = function (string) {
        alert(string);
      };


    });

})();
