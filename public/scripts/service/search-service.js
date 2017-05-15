app.service( 'searchService', [ '$http', function ( $http ) {
  var self = this;

  self.search = function () {
    console.log( 'hit the search function in searchService' );
  };
}]);
