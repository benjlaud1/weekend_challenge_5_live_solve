var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema({
  Poster: String,
  Title: String,
  Year: String,
  Type: String,
  imdbID: String
});

var Favorite = mongoose.model( 'Favorite', FavoriteSchema );

module.exports = Favorite;
