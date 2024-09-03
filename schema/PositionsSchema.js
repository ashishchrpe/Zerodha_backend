let mongoose = require("mongoose");

let PositionsSchema = mongoose.Schema({
        product:String,
        name:String,
        qty: Number,
        avg: Number,
        price:Number,
        net: String,
        day: String,
        isLoss:Boolean,
});

module.exports= {PositionsSchema};