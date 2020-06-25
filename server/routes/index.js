const express = require('express');
const passport = require('../passport');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
