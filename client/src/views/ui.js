var Films = require('../models/films.js');

var UI = function() {
  var films = new Films();
  films.all(function(result){
    this.render(result);
  }.bind(this));

  this.createForm();
}

module.exports = UI;
