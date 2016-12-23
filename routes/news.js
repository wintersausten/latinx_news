var express = require('express');
var router = express.Router();
var extractor = require('unfluff');
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var dataString
  var URL = 'http://bbc.com/news/world-latin-america-38314440';
  request(URL, function(error, response, responseHtml){
    data = extractor(responseHtml);
    return res.json(data);
  }); 
  
});

module.exports = router;
