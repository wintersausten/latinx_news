var express = require('express');
var router = express.Router();
var News = require('../models/news');
var Article = require('../models/article');

// route to form for featured articles
router.get('/add_articles', (req, res) => {
  res.sendFile('../dist/article.html');
});

// route to post featured article to database
router.post('/add_articles', (req, res) => {
  Article.create({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    country: req.body.country
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
  });
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

