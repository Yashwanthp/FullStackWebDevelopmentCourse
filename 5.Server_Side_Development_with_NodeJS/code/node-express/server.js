// Implementing Express router
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = 3000,
    dishRouter = require('./dishrouter.js'),
    promoRouter = require('./promoRouter.js'),
    leaderRouter = require('./leaderRouter.js');

var app = express();

app.use(morgan('dev'));

// If the url contains /dishes in the url, then apply dishRouter to that.
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leadership',leaderRouter);


app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function () {
    console.log("server running");
});