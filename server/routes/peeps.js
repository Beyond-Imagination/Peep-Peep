const express = require('express');
const router = express.Router();

const Peep = require("../models/peeps");

router.post('/', function(req, res, next){
    newPeep = new Peep();
    newPeep.content = req.body.content;

    newPeep.save(function(err) {
        if (err) {
            res.json({"error": err});
            return;
        }
        res.json({"success": true});
    });
});

router.get('/', function(req, res, next){
    Peep.find(function(err, peeps){
        if(err) 
            return res.status(500).send({error: 'fail to read database'});
        res.json(peeps);
    })
});

module.exports = router;
