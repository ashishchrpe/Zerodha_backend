let mongoose =require("mongoose");
let {OrdersSchema}=require("../schema/OrdersSchema");


let OrdersModel= mongoose.model("Orders",OrdersSchema);

module.exports = {OrdersModel};