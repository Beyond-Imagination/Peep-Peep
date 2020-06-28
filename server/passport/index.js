const passport = require("passport");
const local = require("./local");
const jwt = require("./jwt");

const User = require("../models/users");

passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.findOne({_id: id}).populate('followings').populate('followers').exec(function(err, user){
        done(err, user);
    })
});

// ==== Register Strategies ====
passport.use('local-signup', local.signup);
passport.use('local-signin', local.signin);
passport.use('jwt-auth', jwt.authenticateJwt);

module.exports = passport;
