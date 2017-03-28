var express = require('express'),
    morgan = require('morgan');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev')); // dev- preformatted log formats.
// Serve-static is the feature available in express
// We are declaring here that public folder contains all the files that will be served up as static files by this particular server.
// __dirname says that independent of where the server is started 
app.use(express.static(__dirname + '/public'));

// We are avoiding createServer which we did in http module.
app.listen(port,hostname,function(){
    console.log("server running");
});

