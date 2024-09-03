let mongoose =require("mongoose");
let {HoldingsSchema}=require("../schema/HoldingsSchema");


let HoldingsModel= mongoose.model("Holding", HoldingsSchema);

module.exports = {HoldingsModel};