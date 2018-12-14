var http=require('http');
var express=require('express');
var app=express();
var port = Number(process.env.PORT || 8081);

// Home page
app.get('/',function(req,res){
    res.send("Hello");
});

var server = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server2 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server3 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});
