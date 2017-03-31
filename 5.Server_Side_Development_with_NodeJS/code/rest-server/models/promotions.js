var mongoose = require('mongoose');
var schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var currency = mongoose.Types.Currency;

var promotionSchema = new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    image:{
        type:String
    },
    label:{
        type:String,
        default:''
    },
    price:{
        type:currency
    },
    description:{
        type:String
    }
});

var promotions = mongoose.model('Promotion',promotionSchema);
module.exports = promotions;