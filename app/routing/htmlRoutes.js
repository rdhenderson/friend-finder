
module.exports = function(app, list){

  app.get("/survey", function(req, res) {
      res.render('survey');
  });

  app.get("/friends", function(req, res) {
    res.render("index", {friends: list.friends});
  });

  app.get("/search/:name", function(req, res) {
    var name = req.params.name;
    var thisFriend = null;
    for (var i = 0; i < friends.length; i++){
      if (name.toLowerCase() === friends[i].name.toLowerCase()) {
        thisFriend = friends[i];
      }
    }
    if (!thisFriend) {
      res.send ("Could not find the requested friend");
    } else {
      for (var i = 0; i < friends.length; i++){
        friends[i].testMatch = friends[i].compare(thisFriend);
      }
    }
    res.render("search", {friends:friends})

  });
};
