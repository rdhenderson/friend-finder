var connection = require('./connection.js');

function Friend (id, name, photo, survey) {
  this.id = id;
  this.name = name;
  this.photo = photo;
  this.survey = survey;
}

Friend.prototype.compare = function(obj) {
  var score = 0;
  for (var i = 0; i < this.survey.length; i++) {
    score += Math.abs(this.survey[i]-obj.survey[i]);
  }
  return score;
}



exports.Friend = Friend;


//
// var bill = new Friend('Bill', null,[5,1,4,4,5,1,2,5,4,1]);
// var bob = new Friend('Bob', null,[3,4,2,4,2,3,2,5,4,1]);
//
// console.log(bill.compare(bob));
