let mongoose =require("mongoose");
let {PositionsSchema}=require("../schema/PositionsSchema");


let PositionsModel= mongoose.model("Positions",PositionsSchema);

module.exports = {PositionsModel};