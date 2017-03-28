// npm install body-parser --save
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = 3000;

var app = express();

app.use(morgan('dev'));
// Informing Express application saying that, if the body of the incoming request message contains data in the form of json then parse that and convert that into Javascript objects that can be converted and accessed.
app.use(bodyParser.json());

app.all('/dishes', function (req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // If we want to continue the processing with the middleware then we would call the next() function.
    // Before finishing off the function, I will call next which means that parsing should continue on
    next();
});


app.get('/dishes', function (req, res, next) {
    res.end("Will send all the dishes to you!");
});

app.post('/dishes', function (req, res, next) {
    res.end("Will add the dish: " + req.body.name + " with details: " + req.body.description);
});

app.delete('/dishes', function (req, res, next) {
    res.end('Deleting all dishes');
});
// Note that we are not calling next() in get,post,delete. Hence, the process will be terminated and response will be sent.

app.get('/dishes/:dishId', function (req, res, next) {
    res.end("Will send detaild of the dish: " + req.params.dishId + " to you!");
});

app.put('/dishes/:dishId', function (req, res, next) {
    res.write("Updating the dish: " + req.params.dishId + '\n');
    res.end("Will update the dish: " + req.body.name + " with details: " + req.body.description);
});

app.delete('/dishes/:dishId', function (req, res, next) {
    res.end('Deleting dish: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
    console.log("server running");
});

