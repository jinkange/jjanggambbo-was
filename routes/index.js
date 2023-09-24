var express = require('express');
var router = express.Router();
const pool = require('../config/db');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await pool.query('SELECT * FROM member')
  console.log(result);
  res.render('index', { title: 'Express' });
});

module.exports = router;
