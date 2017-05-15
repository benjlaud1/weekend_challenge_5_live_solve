var app = angular.module( 'movieApp', [ 'ngRoute' ] );
console.log('js');

app.config( [ '$routeProvider', function ($routeProvider) {
  $routeProvider
  .when( '/search', {
    template: '<h2>Search page is here</h2>',
    controller: 'searchController',
    controllerAs: 'vm'
  })
  .when( '/favorites', {
    template: '<h2>favorites page is here</h2>',
    controller: 'favoritesController',
    controllerAs: 'vm'
  })
  .otherwise({
    template: '<h2>that is a 404</h2>'
  }); // $routeProvider
}]); // end config

app.controller( 'searchController', function () {
  console.log( 'made it to the searchController' );
});

app.controller( 'favoritesController', function () {
  console.log( 'made it to the favoritesController' );
});
