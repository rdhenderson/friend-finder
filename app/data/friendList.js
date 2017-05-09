var Friend = require('./friends.js').Friend;
var connection = require('./connection.js');

var friendList = {
  friends : [],
  addFriend : function(name, photo, answers) {
    this.friends.push(new Friend(this.friends.length, name, photo, answers));
    this.updateBestMatch();
    return this.friends[this.friends.length-1];
  },

  initFriends : function (){
    connection.query("SELECT * FROM friends;", (err, data) => {
      if (err) throw err;
      if (data[0].survey) {
        for (var i = 0; i < data.length; i++){
          var survey = data[i].survey.split('').map(function(x){
            return parseInt(x, 10);
          });
          // console.log('survey says', survey);
          this.friends.push(new Friend(data[i].id, data[i].name, data[i].photo, survey));
        }
        this.updateBestMatch();
      }
    });
  },
  updateBestMatch : function (){
    for (var i = 0; i < this.friends.length; i++){
      this.friends[i].match = this.findBestMatch(this.friends[i]);
    }
  },
  findBestMatch : function (friendObj){
    var match = { index: -1, score: 100};
    for (var i = 0; i < this.friends.length; i++){
      var sum = 0;
      if (friendObj.id != this.friends[i].id){
        for (var j = 0; j < friendObj.survey.length; j++){
          sum += Math.abs(friendObj.survey[j] - this.friends[i].survey[j]);
        }
        if (sum < match.score) {
          match.name = this.friends[i].name;
          match.score = sum;
          match.index = i;
        }
      }
    }
    return match;
  }
}

module.exports = friendList;
