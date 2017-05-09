console.log('Server.js Started.');
var express = require("express");
var bodyParser = require("body-parser");

var Friend = require('./app/data/friends.js').Friend;

var port = 3000;

var app = express();

//mySQL connection
var connection = require('./app/data/connection.js');

//Import friendList object
var list = require('./app/data/friendList.js');
list.initFriends();

//Initialize express handlebars for rendering
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('port', (process.env.PORT || 3000));
app.set("view engine", "handlebars");

//Enable body parser and static middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/app/public'));

//Call routing functions routing through api and html modules
require('./app/routing/apiRoutes.js')(app, list);
require('./app/routing/htmlRoutes.js')(app, list);

app.listen(app.get('port'));
