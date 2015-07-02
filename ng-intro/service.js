(function () {
  'use strict';
  angular
    .module('luca')
    .factory('PostsService',function ($http) {
      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ng-awesome';

      var getPosts = function () {
        return $http.get(url);
      };
      var getSinglePost = function (id) {
        return $http.get(url + '/' + id);
      };
      var createPost = function (newPost) {
        $http.post(url, newPost);
      };
      var updatePost = function (id, poopy) {
        $http.put(url + '/' + id, poopy);
      };
      var deletePost = function (id) {
        $http.delete(url + '/' + id);
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
