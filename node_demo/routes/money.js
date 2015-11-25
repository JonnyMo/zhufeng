var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/money', function(req, res, next) {
  res.send(res.money);
});

module.exports = router;
