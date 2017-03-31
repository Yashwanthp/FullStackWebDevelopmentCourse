var mongoose = require('mongoose');
var assert = require('assert');
var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // We are connections
    console.log("Connected correctly to server");

    // Create a new Dishes
    var newDish = Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });

    // Save the new Dish
    newDish.save(function (err) {
        if (err) throw err;
        console.log('Dish created!');

        // Get all the dishes
        // Dishes collection is created when model "Dish" is created.
        Dishes.find({}, function (err, dishes) {
            if (err) throw err;

            console.log(dishes);
            db.collection('dishes').drop(function () {
                db.close();
            })
        })
    });
});