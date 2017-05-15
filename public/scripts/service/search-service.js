app.service( 'searchService', [ '$http', function ( $http ) {
  var self = this;

  // create an empty array as a placeholder for the returned data
  // empty array makes it so the view doesn't get angry when its undefined
  // properties will allow it to keep the connection to the dom and allow 2 way bind.
  self.searchResult = { details: [] };

  // search OMDB for the the searched text
  self.search = function ( searchText ) {
    console.log( 'hit the search function in searchService' );
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + searchText
    }).then( function success ( response ) {
      console.log(response.data.Search);
      self.searchResult.details = response.data.Search;
    }); // end http
  }; // end search
}]); // end searchService
