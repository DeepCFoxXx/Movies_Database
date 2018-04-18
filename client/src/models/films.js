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
  }
};


module.exports = Films;
