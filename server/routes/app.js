var express = require('express');
var router = express.Router();
var News = require('../models/news');

router.get('/country/:countryName/news/:id', (req, res) => {
  console.log(req.params.countryName);
  // console.log(typeof req.param.countryName);
  News.findById(req.params.id, function(err, foundNews){
    if(err){
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    }
    res.status(200).json({
        message: 'Success',
        obj: foundNews
      });
  })
});

router.get('/country/:countryName', (req, res) => {
  console.log(req.params.countryName);
  // console.log(typeof req.param.countryName);
  News.find({country: req.params.countryName.toLowerCase()}, function(err, foundNews){
    if(err){
      console.log("ERR");
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    }
    res.status(200).json({
        message: 'Success',
        obj: foundNews
      });
  })
});

router.get('/', (req, res) => {
  News.find().sort('-date')
    .exec(function(err, news) {
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      
      res.status(200).json({
        message: 'Success',
        obj: news
      });
    });

  
});

module.exports = router;

