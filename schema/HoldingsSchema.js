let mongoose = require("mongoose");

let HoldingsSchema = mongoose.Schema({
      
        name:String,
        qty: Number,
        avg: Number,
        price:Number,
        net: String,
        day: String,
      
});

module.exports= {HoldingsSchema};