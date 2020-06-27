const express = require('express');
const passport = require('../passport');
const jwt = require('../passport/jwt');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next){
    (passport.authenticate('local-signup', { sessions: false }, function(err, user) {
        if (err) {
            res.status(401).json("error", err)
        }
        console.log(user, err)

        token = jwt.generateJwt(user._id)
        console.log(token)
        res.json({"jwt": token})
    }))(req, res, next)
});

router.post('/signin', function(req, res, next){
    (passport.authenticate('local-signin', { sessions: false }, function(err, user) {
        if (err) {
            res.status(401).json("error", err)
        }
        console.log(user, err)

        token = jwt.generateJwt(user._id)
        console.log(token)
        res.json({"jwt": token})
    }))(req, res, next)
});

module.exports = router;
