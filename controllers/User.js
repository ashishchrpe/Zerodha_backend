const User= require("../model/User");

module.exports.signup=async(req,res)=>{
    try{
     let {username,email,password}= req.body;
     const newUser = new User({username,email});
     console.log(newUser);
     const registerUser = await User.register(newUser, password);
     console.log(registerUser);
     console.log("hiii");

     req.login (registerUser ,(err)=>{
         if(err){
            console.log("error");
             return next(err);
             
         }
         console.log("hiii");
     })   
    }
    catch(e){
     req.flash("error",e.message);
     res.redirect("http://localhost:3000/");
    }
     
 };
 module.exports.renderSignupForm= (req,res)=>{
    console.log("get req");
    res.send("hello");
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("https://zerodha-project-dwj8.onrender.com/signup");
    })
}; 