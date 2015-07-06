(function () {
  'use strict';
  angular
    .module('luca')
    .controller('MainController', function ($scope, PostsService, $location, $routeParams) {
        PostsService.read().success(function (posts) {
          $scope.posts = posts;
        });

        PostsService.readOne($routeParams.id).success(function (post) {
          $scope.post = post;

        });

        $scope.deletePost = function (id) {
          PostsService.delete(id);
        };
        $scope.createPost = function (newPost) {
          PostsService.create(newPost);
          $location.path('/posts');
        };
        var watchCallback = function () {
          PostsService.read().success(function (posts) {
            $scope.posts = posts;
          });
        };
        $scope.$on('post:updated', watchCallback);
        $scope.$on('post:deleted', watchCallback);
        $scope.$on('post:created', watchCallback);

    });

})();
