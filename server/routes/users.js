const express = require('express');
const router = express.Router();

const User = require("../models/users");
const passport = require("../passport")

/* GET users listing. */
router.get('/', function(req, res, next){
    (passport.authenticate('jwt-auth', { sessions: false }, function(err, user) {
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(user);
    }))(req, res, next)
});

router.get('/follower', function(req, res, next){
    (passport.authenticate('jwt-auth', { sessions: false }, function(err, user) {
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(user.followers);
    }))(req, res, next)
});

router.get('/following', function(req, res, next){
    (passport.authenticate('jwt-auth', { sessions: false }, function(err, user) {
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(user.followings);
    }))(req, res, next)
});

module.exports = router;
