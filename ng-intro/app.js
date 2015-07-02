(function () {
  "use strict";
  angular
    .module('luca', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainController'
        })
        .when('/posts', {
          templateUrl: 'views/posts.html',
          controller: 'MainController'
        })
        .when('/new', {
          templateUrl: 'views/createPosts.html',
          controller: 'MainController'
        })
        .when('/posts/:id', {
          templateUrl: 'views/postDetails.html',
          controller: 'MainController'

        })

        .when('/bubbles', {
          templateUrl: 'views/bubbles.html'

        })
        .when('/404', {
          template: '<h1>Sorry, page not found</h1>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });

})();
