var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var path = require( 'path' );
var port = 5000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

app.get( '/', function ( req, res ) {
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url GET

app.listen( port, function () {
  console.log( 'the server is up on ', port );
});
