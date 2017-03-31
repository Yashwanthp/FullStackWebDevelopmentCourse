var mongoose = require('mongoose');
var assert = require('assert');
var Promotions = require('./models/promotions');
var url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection Error: "));
db.on('open',function(){
    console.log("Connection Succesful!");

    Promotions.create({
    name: "Weekend Grand Buffet",
      image: "images/buffet.png",
        label: "New",
      price: "19.99",
      description: "Featuring . . ."
    },function(err, promotion){
        if(err) throw err;
        console.log("Promotion Created");
        console.log(promotion);
    });
})