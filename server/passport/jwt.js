const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const User = require("../models/users")

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
};

AuthenticateJwt = new JwtStrategy(opts, function(jwtPayload, done) {
    User.findOne({_id: jwtPayload.id}).populate('followings').populate('followers').exec(function(err, user){
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
})

const GenerateJwt = function(id) {
    let token = jwt.sign({ id }, process.env.SECRET);
    console.log(token);
    return token;
} 

module.exports = {
    authenticateJwt: AuthenticateJwt,
    generateJwt: GenerateJwt
};
