var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Lab 4',
        message: 'COMP2068 - Advanced Web Programming'
      });
});

/* GET harshit */
router.get('/harshit', function (req, res, next) {
    // load the harshit.ejs view
    res.render('harshit',
        {
            title: 'Harshit',
            message: 'Harshit is studing Computer Programming in Georgian College. He is currrently in 3rd semester of the course.'
        });
});

/* GET tania */
router.get('/tania', function (req, res, next) {
    // load the tania.ejs view
    res.render('tania',
        {
            title: 'Tania',
            message: 'Tania is currently doing a job as a dentist in her college from where she completed her degree in BDS.'
        });
});

/* GET suhani */
router.get('/suhani', function (req, res, next) {
    // load the suhani.ejs view
    res.render('suhani',
        {
            title: 'Suhani',
            message: 'Suhani is a housewife. She takes care of everyone in the house and she loves cooking.'
        });
});

/* GET lovinder */
router.get('/lovinder', function (req, res, next) {
    // load the lovinder.ejs view
    res.render('lovinder',
        {
            title: 'Lovinder',
            message: 'Lovinder is a doctor. He is specialist in homeopathy medicines.'
        });
});

module.exports = router;
