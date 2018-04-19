var express = require('express');
var app = express();
var filmRouter = express.Router();
var FilmQuery = require('../db/filmQuery.js');
var query = new FilmQuery();
var Film = require('../client/src/models/film.js');
var Review = require('../client/src/models/review.js');
var films = require('../client/src/models/films.js')();

filmRouter.get('/:id', function(req, res){
  res.json(films[req.params.id]);
});

module.exports = filmRouter;
