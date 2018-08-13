var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var PORT = 3000; 

htmlRoutes(app);
apiRoutes(app);

//LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    
});



