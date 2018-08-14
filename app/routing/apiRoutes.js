module.exports = function(app){

    var friendsArr = require("../data/friends.js");

    //Returns JSON with all friends info
    app.get("/api/friends", function(req, res){

        return res.json(friendsArr.friends);
    
    });

    //Adds a new friend object to JSON
    app.post("/api/friends", function(req, res){

        var newFriend = req.body;

        friendsArr.friends.push(newFriend);

        res.json(friendsArr.friends);

    });

}
