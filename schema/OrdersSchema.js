let mongoose = require("mongoose");

let OrdersSchema = mongoose.Schema({
      
        name:String,
        qty: Number,
        price:Number,
        mode: String,
        
      
});

module.exports= {OrdersSchema};