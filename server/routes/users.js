const express = require('express');
const passport = require('../passport');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', passport.authenticate('local-signup',{
  successRedirect : "/",
  failureRedirect : "/user/signup/fail",
}));

router.post('/signin', passport.authenticate('local-signin', {
  successRedirect : "/",
  failureRedirect : "/signin",
}))

module.exports = router;
