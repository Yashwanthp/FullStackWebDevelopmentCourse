var mongoose = require('mongoose');
var assert  = require('assert');
var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'Connection Error:'));
db.once('open',function(){
    // We are connected
    console.log("Connection successful!");

    // Create a new Dish using .create method on Dishes collection
    // Create automatically saves the dish without explicitly calling save on Dish model.
    Dishes.create({
        name:'Uthapizza',
        description:'test'
    },function(err,dish){
        if(err) throw err;
        console.log('Dish Created!');
        console.log(dish);

        var id = dish._id;

        setTimeout(function(){
            // Update the dish by ID.
            Dishes.findByIdAndUpdate(id,{
                $set:{
                    description:"Updated Test"
                }
            },{
                new : true
            })
            // Chaining exec function. Works similar to callback function.
            .exec(function(err, dish){
                if(err) throw err;
                console.log('Updated Dish!');
                console.log(dish);

                db.collection('dishes').drop(function(){
                    db.close();
                });
            });
        },3000);
    })
})