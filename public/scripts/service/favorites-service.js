app.service( 'favoritesService', [ '$http', function ( $http ) {
  var self = this;

  // create an empty array as a placeholder for the returned data
  // empty array makes it so the view doesn't get angry when its undefined
  // properties will allow it to keep the connection to the dom and allow 2 way bind.
  self.favorites = { list: [] };

  self.getFavorites = function () {
    console.log( 'in getFavorites' );
    $http({
      method: 'GET',
      url: '/favorites'
    }).then( function ( response ) {
      self.favorites.list = response.data;
    });
  };

  self.getFavorites();

  // search our server to add a new favorite movie
  self.saveFavorite = function ( movie ) {
    console.log( 'hit the saveFavorite function in favoritesService, saving:', movie );
    $http({
      method: 'POST',
      url: '/favorites',
      data: movie
    }).then( function success ( response ) {
      console.log(response);
      self.getFavorites();
    }); // end http
  }; // end saveFavorite

  self.removeFavorite = function ( movieId ) {
    console.log( 'hit the removeFavorite functio, removing:', movieId );
    $http({
      method: 'DELETE',
      url: '/favorites',
      params: { id: movieId }
    }).then( function success ( response ) {
      console.log(response);
      self.getFavorites();
    }); // end http
  }; // end saveFavorite
}]); // end favoritesService
