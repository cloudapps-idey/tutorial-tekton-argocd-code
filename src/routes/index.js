var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Cloud Native demo April 3rd 2021' });
});

module.exports = router;
