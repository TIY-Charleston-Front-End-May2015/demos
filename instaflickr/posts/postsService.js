(function () {
    "use strict";

    angular
        .module('posts')
        .factory('postsService', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getPosts: getPosts,
                getPost: getPost,
                createPost: createPost,
                editPost: editPost,
                deletePost: deletePost
            };

            function getPosts() {

                return $http.get("http://tiy-fee-rest.herokuapp.com/collections/demotiy");
            }

            function getPost(postId) {
                return $http.get("http://tiy-fee-rest.herokuapp.com/collections/demotiy/" + postId);
            }

            function createPost(newPost) {
                $http.post("http://twilcalweb.herokuapp.com/api/v1/auth/login", newPost).then(function (res) {
                    $rootScope.$broadcast("post:added");
                });
            }

            function editPost(post) {
                $http.put("http://tiy-fee-rest.herokuapp.com/collections/demotiy/" + post._id, post).then(function (res) {
                    $rootScope.$broadcast("post:updated");
                });

            }

            function deletePost(postId) {
                $http.delete("http://tiy-fee-rest.herokuapp.com/collections/demotiy/" + postId).then(function (res) {
                    $rootScope.$broadcast("post:deleted");
                });
            }



        }]);
})();
