var express = require('express');
var router = express.Router();
var News = require('../models/news');

// route to post featured article to database
router.post('/', (req, res) => {
  News.create({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text,
    country: req.body.country,
    publisher: req.body.publisher
  }, function(err, addedArticle) {
    if (err) {
      res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Success',
      obj: addedArticle
    })
  })
})

// route to get specific article from country news page
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

// route to get news from specifc country
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
  });
});

// root route
router.get('/', (req, res) => {
  News.find().sort('-date')
    .exec(function(err, news) {
      if(err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      News.find({publisher: "ASUCD"}, function(err, foundASUCD){
        if(err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          });
        }

        res.status(200).json({
          message: 'Success',
          obj: news,
          obj2: foundASUCD
        });
      })
      // res.status(200).json({
      //   message: 'Success',
      //   obj: news
      // });
    });
});

module.exports = router;

