app.controller( 'searchController', [ 'searchService', function ( searchService ) {
  console.log( 'made it to the searchController' );
  var self = this;
  self.search = searchService.search;// TODO add search

}]);
