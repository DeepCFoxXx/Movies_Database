var assert = require('assert');
var Film = require('../film.js');

describe('Film', function() {
  var film;

  beforeEach(function() {
    film = new Film({
      title: 'Aliens',
      actors: 'Sigourney Weaver',
      genres: ['Sci Fi']
    });
  });

  it('should have title', function() {
    assert.equal(film.title, 'Aliens');
  });

  it('should have actors', function() {
    assert.equal(film.actors, 'Sigourney Weaver');
  });

});
