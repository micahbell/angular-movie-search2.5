app.controller('SearchController', function($scope, $http, $routeParams, $location) {
  $scope.movieQuery = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.query).then(function(movieData) {
      $location.path('/' + $scope.query);
      $scope.movieData = movieData.data.Search;
      console.log(movieData.data.Search);
    });
  };

  $scope.movieInfo = function(movieId) {
    $http.get('http://www.omdbapi.com/?i=' + movieId).then(function(movie) {
      $scope.test = 'test';
      $location.path('/' + $scope.query + '/' + movieId);
      $scope.movie = movie.data;
      console.log(movie.data);
    })
  }
});



// $http.get('http://www.omdbapi.com/?i=' + movieId).then(function(movie) {
//   $location.path('/' + movieId);
//   console.log(movie.data);
// })
