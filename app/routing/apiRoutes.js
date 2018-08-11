app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/friends", function(req, res){

    return res.json("#");

});