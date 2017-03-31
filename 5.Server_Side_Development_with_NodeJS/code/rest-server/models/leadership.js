var mongoose = require('mongoose');
var schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var currency = mongoose.Types.Currency;

var leaderSchema = new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    image:{
        type:String
    },
    designation:{
        type:String
    },
    abbr:{
        type:currency
    },
    description:{
        type:String
    }
});

var leaders = mongoose.model('Leadership',leaderSchema);
module.exports = leaders;