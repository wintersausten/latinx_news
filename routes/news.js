var express = require('express');
var router = express.Router();
var extractor = require('unfluff');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var News = mongoose.model('News');

// GET news listing
router.get('/', function(req, res, next) {
  News.find(function(err, news) {
    if (err) {
      return res.send(500, err);
    }
    return res.send(news);
  });
});

module.exports = router;
