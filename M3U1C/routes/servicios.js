var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('servicios');//servicios.hbs > views
});

module.exports = router;