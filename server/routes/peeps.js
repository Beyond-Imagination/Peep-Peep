const express = require('express');
const router = express.Router();

const passport = require("../passport")
const Peep = require("../models/peeps");

router.post('/', function(req, res, next){
    (passport.authenticate('jwt-auth', { sessions: false }, function(err, user) {
        if(err) 
            return res.status(500).send({error: 'fail to read database'});

        if(user == false) {
            return res.status(401).send({error: 'invalid access token'})
        }

        newPeep = new Peep();
        newPeep.content = req.body.content;
        newPeep.postedBy = user._id;
    
        newPeep.save(function(err) {
            if (err) {
                res.json({"error": err});
                return;
            }
            res.json({"success": true});
        });
    }))(req, res, next)
});

router.get('/', function(req, res, next){
    (passport.authenticate('jwt-auth', { sessions: false }, function(err, user) {
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        
        if(user == false) {
            return res.status(401).send({error: 'invalid access token'})
        }

        Peep.find().populate('postedBy').exec(function(err, peeps){
            if(err) 
                return res.status(500).send({error: 'fail to read database'});
            res.json(peeps);
        })
    }))(req, res, next)
});

module.exports = router;
