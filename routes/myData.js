var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('myData', { title: 'Sajida Mohammad' });
});

module.exports = router;
