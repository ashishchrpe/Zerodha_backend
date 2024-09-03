require("dotenv").config();

let express = require("express");
let mongoose= require("mongoose");
let {HoldingsModel}= require("./model/HoldingsModel");
let {PositionsModel}= require("./model/PositionsModel");
let {OrdersModel} =require("./model/OrdersModel");
let bodyParser= require("body-parser");
const flash= require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User= require("./model/User");
const userRoute= require("./routes/User");
const MongoStore= require("connect-mongo");
const session = require("express-session");
let cors= require("cors");
let app= express();

app.use(cors());
app.use(bodyParser.json());
let port= 8080;

app.listen(port,function(){
    console.log("server working on port ", port);
});



const store= MongoStore.create({
  mongoUrl: process.env.MONGODB_URL,
  crypto: {
    secret:process.env.SECRET,
  },
  touchAfter: 24* 3600,
});

const sessionOptions={
  store,
  secret:process.env.SECRET,
  resave: false,
  saveUninitialized : true,
  cookie : {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly : true,
  }
 
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy( User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

app.get("/allHoldings",async(req,res)=>{
    let Holdings = await HoldingsModel.find({});
    res.json(Holdings);
});

app.use("/",userRoute);





