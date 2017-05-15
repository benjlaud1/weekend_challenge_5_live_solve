var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );
var path = require( 'path' );
var favorites = require( './routes/favorites' );

var port = 5000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

mongoose.connect( 'mongodb://localhost:27017/movieLiveSolve' );
mongoose.connection.on( 'connected', function () {
  console.log( ' connected to mongodb' );
}); // end on connection

mongoose.connection.on( 'error', function () {
  console.log( 'error in connection to mongodb' );
}); // end on connection

app.get( '/', function ( req, res ) {
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url GET

app.use( '/favorites', favorites); // end favorites POST

app.listen( port, function () {
  console.log( 'the server is up on ', port );
}); // end listen
