var Friend = require('../data/friends.js');
var connection = require('../data/connection.js');

module.exports = function(app, list) {
  //API ROUTES
  app.get("/api/friends", function(req, res) {
    //POST ALL FRIENDS
    res.json(list.friends);
  });

  app.post("/api/friends", function(req, res) {
    var answers = [];
    var name = req.body.name;
    for (var i = 1; i < 6; i++){
        answers.push(parseInt(req.body['question0'+i]));
    }
    var newFriend = list.addFriend(name, null, answers);

    connection.query("INSERT INTO friends (name, photo, survey) VALUES (? ,? ,?)",
                    [req.body.name, '#', answers.join('')], (err, result) => {
      if (err) throw err;
      res.send("Your match is " + newFriend.match.name + ". You have a difference score of: " + newFriend.match.score);
    });
  });
};
