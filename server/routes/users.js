const express = require('express');
const router = express.Router();

const User = require("../models/users");
/* GET users listing. */
router.get('/', function(req, res, next) {
    User.findOne({_id: req.user._id}).populate('followers').populate('followings').exec(function(err, user){
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(user);
    })
});

router.get('/follower', function(req, res, next){
    User.findOne({_id: req.user._id}).populate('followers').exec(function(err, user){
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        console.log(user)
        res.json(user.followers);
    })
});

router.get('/following', function(req, res, next){
    User.findOne({_id: req.user._id}).populate('followings').exec(function(err, user){
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(user.followings);
    })
});

module.exports = router;
