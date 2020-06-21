const express = require('express');
const router = express.Router();

const Post = require("../models/peeps");

router.post('/', function(req, res, next){
    newPeep = new Post();
    newPeep.content = req.body.content;

    newPeep.save(function(err) {
        if (err) {
            res.json({"error": err})
        }
    });

    res.json({"success": true})
});

module.exports = router;
