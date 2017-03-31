var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating a Schema
var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Creating a Model
var Dishes = mongoose.model('Dish', dishSchema);

// Making the model avaialble to the node application
module.exports = Dishes;