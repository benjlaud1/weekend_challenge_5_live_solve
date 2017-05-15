var app = angular.module( 'movieApp', [ 'ngRoute' ] );
console.log('js');

app.config( [ '$routeProvider', function ($routeProvider) {
  $routeProvider
  .when( '/search', {
    templateUrl: 'views/search.html',
    controller: 'searchController',
    controllerAs: 'vm'
  })
  .when( '/favorites', {
    templateUrl: 'views/favorites.html',
    controller: 'favoritesController',
    controllerAs: 'vm'
  })
  .otherwise({
    template: '<h2>that is a 404</h2>'
  }); // $routeProvider
}]); // end config
