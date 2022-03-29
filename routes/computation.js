var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');

let alert = require('alert');
/* GET my data page. */
router.get('/', function(req, res, next) {
    let query = req.query
    let a = query.a;
    res.send('abs applied to: ' + a + " is " + Math.abs(a));
});


module.exports = router;