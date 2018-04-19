var Films = require('../models/films.js');

var UI = function() {
  var films = new Films();
  films.all(function(result){
    this.render(result);
  }.bind(this));

  this.createForm();
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

module.exports = UI;
