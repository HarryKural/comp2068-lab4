/**
 * Created by Harshit Sharma on 02-Feb-2017.
 */
// express setup
let express = require('express');
let router = express.Router();

/* GET family main page */
router.get('/', function (req, res, next) {
    res.render('family/index')
});

// make this file public
module.exports = router;
