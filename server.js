//To run server.js, type `node server.js` or `npm run watch`

//Require all node packages here
var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Port number for heroku/user
var PORT = process.env.PORT || 3000; 

//exporting html routes and api routes from other .js files.
htmlRoutes(app);
apiRoutes(app);

//LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



