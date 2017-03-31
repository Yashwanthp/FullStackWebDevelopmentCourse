var mongoose = require('mongoose');
var assert = require('assert');
var leadership = require('./models/leadership');
var url = "mongodb://localhost:27017/conFusion";
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,"Connection Error: "));
db.on('open',function(){
    console.log("Connection Succesful!");

    leadership.create({
     name: "Peter Pan",
      image: "images/alberto.png",
      designation: "Chief Epicurious Officer",
      abbr: "CEO",
      description: "Our CEO, Peter, . . ."
    },function(err, leadership){
        if(err) throw err;
        console.log("leadership Created");
        console.log(leadership);
    });
})