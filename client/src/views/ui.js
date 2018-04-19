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

  createReview: function(li, review) {
    this.appendText(li, review.comment, 'Comment: ');
    this.appendText(li, review.rating, 'Rating: ');
    this.appendText(li, review.author, 'Author: ');
  }
},

render: function(films) {
  var container = document.getElementById('films');

  for (var film of films) {
    var li = document.createElement('li');
    this.appendText(li, film.title, 'Film: ');
    this.appendText(li, film.genre, 'Genre: ');

    for (var review of film.reviews){
      this.createReview(li, review);
    }

    container.appendChild(li);
  }
},

  createForm: function(){
    var div = document.createElement('div');
    var form = document.createElement('form');
    var body = document.querySelector('body');

    var titleInput = document.createElement('input');
    titleInput.setAttribute("name", "title");
    form.appendChild(titleInput);

    var actorsInput = document.createElement('input');
    actorsInput.setAttribute("name", "actors");
    form.appendChild(actorsInput);

    var button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'Add Film';
    form.appendChild(button);
  }
}

module.exports = UI;
