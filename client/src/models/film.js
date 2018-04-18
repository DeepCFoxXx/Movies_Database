var Film = function(options) {
  this.title = options.title;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
  this.genre = options.genre;
}

module.exports = Film;
