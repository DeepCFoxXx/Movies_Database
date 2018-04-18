var Film = require('./film.js');
var Review = require('./review.js');

var Films = function() {}

Films.prototype = {
  makeRequest: function(method, url, callback, payload){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = callback;
    request.send(payload);
  },
  all: function(callback){
    var self = this;
    this.makeRequest("GET", "http://localhost:3000/api/films", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      var films = self.populateFilms(results);
      callback(films);
    });
  }
};


module.exports = Films;
