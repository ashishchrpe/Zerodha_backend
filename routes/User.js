const express = require("express");
const router = express.Router();
const User = require("../model/User");
const passport = require("passport");
const userControllers= require("../controllers/User");
const {saveRedirectUrl}= require("../Middleware/Middleware");
const wrapAsync= require("../wrapAsync");

router.route("/signup")
.post(wrapAsync(userControllers.signup))
.get(userControllers.renderSignupForm);

router.route("/login")
.post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
       res.json("userLogin");
        }
  
);


router.get("/logout",userControllers.logout);

module.exports = router;