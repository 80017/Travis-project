var http=require('http');
var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
var app=express();
var port = Number(process.env.PORT || 8081);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

// Home page
app.get('/',function(req,res){
    console.log("Got a Get request for index.html page");
    res.sendfile(__dirname +"/"+ 'index.html');
});

// sending mail function
app.post('/send', function(req, res){
if(req.body.email == "" || req.body.subject == "") {
  res.send("Error: Email & Subject should not blank");
  return false;

}
console.log("Got a POST request for index");
// Sending Email Without SMTP
nodemailer.mail({
   from: req.body.email1,
    to: req.body.email2,
    subject: req.body.subject,
   description:req.body.discription
});
res.send("Email has been sent successfully");

});

// Starting server
var server = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});
