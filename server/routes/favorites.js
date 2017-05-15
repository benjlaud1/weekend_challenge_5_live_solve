var router = require( 'express' ).Router();
var Favorite = require( '../models/favorites.js' );

router.get( '/', function ( req, res) {
  Favorite.find( {}, function ( err, favorites ) {
    if ( err ) {
      console.log( 'error in favorites find ->', err );
      res.sendStatus( 500 );
    } else {
      res.send( favorites );
    }
  });
}); // end /favorites GET

router.post( '/', function ( req, res) {
  var newMovieObject = req.body;
  console.log( 'newMovieObject', newMovieObject );
  var newMovie = new Favorite( newMovieObject );
  newMovie.save( function ( err ) {
    if ( err ) {
      console.log( 'Error posting new movie object' );
      res.sendStatus( 500 );
    } else {
      res.sendStatus( 201 );
    }
  });
}); // end /favorites POST

router.delete( '/', function ( req, res ) {
  var movieIdToDelete = req.query.id;
  Favorite.remove( { _id: movieIdToDelete }, function ( err ) {
    if ( err ) {
      console.log( 'error removing movie ->', err );
      res.sendStatus( 500 );
    } else {
      res.sendStatus( 200 );
    }
  });
});

module.exports = router;
