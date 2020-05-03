const express = require('express');
const passport = require('../passport');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', passport.authenticate('local-signup',{
    successRedirect : "/",
    failureRedirect : "/login",
  }));

module.exports = router;
