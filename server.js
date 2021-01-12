var express = require("express");
var path = require("path");
var  fs = require("fs");
var noteList = JSON.parse(fs.readFileSync("/db/db.json", "utf8"));
var app = express();
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    return res.json(noteList);
});

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    notelist.push(newNote);
    return res.json(noteList);
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});