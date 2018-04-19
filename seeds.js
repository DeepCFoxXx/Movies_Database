use movies;

db.films.insert([
  {
    title: "Army of Darkness",
    actors: ["Bruce Campbell", "Embeth Davidtz"],
    genre: "Fantasy/Horror",
    reviews: [{
      comment: "Near perfect use of skeletons.",
      rating: 7,
      author: "Kara"}]
  },
  {
    title: "Dredd",
    actors: ["Karl Urban", "Olivia Jo Thirlby"],
    genre: "Action/Sci fi",
    reviews: [{
      comment: "Its the raid with Judge Dredd so its fantastic",
      rating: 8,
      author: "Kara"
    }]
  }]
);
