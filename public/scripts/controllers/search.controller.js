app.controller( 'searchController', [ 'searchService', 'favoritesService', function ( searchService, favoritesService ) {
  console.log( 'made it to the searchController' );
  var self = this;
  self.search = searchService.search;// TODO add search
  self.searchResult = searchService.searchResult;
  self.saveFavorite = favoritesService.saveFavorite;
}]); // end searchController
