var router = require( 'express' ).Router();

router.get( '/', function ( req, res) {
  res.send( 'you hit /favorites GET' );
}); // end /favorites GET

router.post( '/', function ( req, res) {
  res.send( 'you hit /favorites POST' );
}); // end /favorites POST

module.exports = router;
