var MongoClient = require('mongodb').MongoClient;

var FilmQuery = function(){
  this.url = 'mongodb://localhost:27017/movies';
}

FilmQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      if(db){
        var collection = db.collection('films');
        collection.find().toArray(function(err, docs) {
          console.log(docs);
          onQueryFinished(docs);
        });
      }
    });
  },
  add: function(filmToAdd, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if(db){
          var collection = db.collection('films');
          collection.insert(filmToAdd);
          collection.find().toArray(function(err, docs) {
            console.log(docs);
            onQueryFinished(docs);
          });
        };
    });
  }
}

module.exports = FilmQuery;
