// app/routes/extractor.js

// extract article from BBC news site 
var express = require('express');
var router = express.Router();
var Boilerpipe = require('boilerpipe');

function getBBCNews(pageURL) {
  var boilerpipe = new Boilerpipe({
      extractor: Boilerpipe.Extractor.Article,
      url: pageURL
  });
  boilerpipe.getText(function(err,text){
      return text;
  });
}

router.get('/news', function(req, res){
  return res.json(getBBCNews('http://www.bbc.com/news/world-latin-america-38314440'));
}); 

module.exports = router;