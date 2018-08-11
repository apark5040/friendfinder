var express = require("express");

var bodyParser = require("body-parser");

var path = require("path");

var app = express();

var htmlRoutes = require("./app/routing/htmlRoutes.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var PORT = 3000;

// app.get("/survey", function (req, res) {

//     res.sendFile(path.join(__dirname, "./app/public", "survey.html"));

// });

// app.get("/", function (req, res) {

//     res.sendFile(path.join(__dirname, "./app/public", "home.html"));

// });

htmlRoutes(app);

//LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

    
});

//'npm run watch'
//Make sure 'watch' is in package.json 


