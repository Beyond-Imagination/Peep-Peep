const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");

signUpStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: true,
    passReqToCallback: true
  },
  (req, email, password, done) => {
    User.findOne({ email: email }, (error, user) => {
      
      if (error) return done(error);
      else if (user)
        return done(null, false, { message: "중복된 이메일 입니다" });

      newUser = new User();
      newUser.email = email;
      newUser.password = password; // TODO change to hash
      newUser.nickname = req.body.nickname;

      newUser.save(function(err) {
        if (err) throw err;
        return done(null, newUser);
      });
    });
  }
);

module.exports = {
    signup: signUpStrategy
};
