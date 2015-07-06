(function () {
  'use strict';
  angular
    .module('luca')
    .factory('PostsService',function ($http, $rootScope) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ng-awesome';

      var getPosts = function () {
        return $http.get(url);
      };
      var getSinglePost = function (id) {
        return $http.get(url + '/' + id);
      };
      var createPost = function (newPost) {
        $http.post(url, newPost).success(function () {
          $rootScope.$broadcast('post:created');
        });
      };
      var updatePost = function (id, poopy) {
        $http.put(url + '/' + id, poopy).success(function () {
          $rootScope.$broadcast('post:updated');
        });
      };
      var deletePost = function (id) {
        $http.delete(url + '/' + id).success(function (response) {
          $rootScope.$broadcast('post:deleted');
        });
      };

      return {
        create: createPost,
        read: getPosts,
        readOne: getSinglePost,
        update: updatePost,
        delete: deletePost

      };


    });
})();
