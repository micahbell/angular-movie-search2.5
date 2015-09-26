var app = angular.module('angularOMDB', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/:searchQuery', {
      templateUrl: 'partials/movies.html',
      controller: 'SearchController'
    })
    .when('/:searchQuery/:movieId', {
      templateUrl: 'partials/movie.html',
      controller: 'SearchController'
    })
});
