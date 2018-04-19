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

filmRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  });
});

filmRouter.put('/:id', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films[req.params.id] = film;
  res.json({data: films});
});

filmRouter.post('/', function(req, res) {
  console.log(req.body)
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  query.add(film,function(results){
    res.json(results);
  });
});

module.exports = filmRouter;
