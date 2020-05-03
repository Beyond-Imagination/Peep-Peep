const passport = require("passport");
const local = require("./local");

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// ==== Register Strategies ====
passport.use('local-signup', local.signup);
passport.use('local-signin', local.signin);

module.exports = passport;
