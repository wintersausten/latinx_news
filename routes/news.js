var express = require('express');
var router = express.Router();
var extractor = require('unfluff');
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var pageUrl = 'http://bbc.com/news/world-latin-america-38314440';
  request(pageUrl, function(error, response, responseHtml){
    data = extractor(responseHtml);
    res.send(data.text);
  })
});

module.exports = router;
