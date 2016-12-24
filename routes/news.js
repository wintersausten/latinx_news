var express = require('express');
var router = express.Router();
var extractor = require('unfluff');
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var data = [{
    "title": "Shovel Knight review",
    "softTitle": "Shovel Knight review: rewrite history",
    "date": "2014-06-26T13:00:03Z",
    "copyright": "2016 Vox Media Inc Designed in house",
    "author": [
      "Griffin McElroy"
    ],
    "publisher": "Polygon",
    "text": "Shovel Knight is inspired by the past in all the right ways — but it's far from stuck in it. [.. snip ..]",
    "image": "http://cdn2.vox-cdn.com/uploads/chorus_image/image/34834129/jellyfish_hero.0_cinema_1280.0.png",  
    "tags": [],
    "videos": [],
    "canonicalLink": "http://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u",
    "lang": "en",
    "description": "Shovel Knight is inspired by the past in all the right ways — but it's far from stuck in it.",
    "favicon": "http://cdn1.vox-cdn.com/community_logos/42931/favicon.ico",
    "links": [
      { "text": "Six Thirty", "href": "http://www.sixthirty.co/" }
    ]
  },
  {
    "title": "Shovel Knight review",
    "softTitle": "Shovel Knight review: rewrite history",
    "date": "2014-06-26T13:00:03Z",
    "copyright": "2016 Vox Media Inc Designed in house",
    "author": [
      "Griffin McElroy"
    ],
    "publisher": "Polygon",
    "text": "Shovel Knight is inspired by the past in all the right ways — but it's far from stuck in it. [.. snip ..]",
    "image": "http://cdn2.vox-cdn.com/uploads/chorus_image/image/34834129/jellyfish_hero.0_cinema_1280.0.png",  
    "tags": [],
    "videos": [],
    "canonicalLink": "http://www.polygon.com/2014/6/26/5842180/shovel-knight-review-pc-3ds-wii-u",
    "lang": "en",
    "description": "Shovel Knight is inspired by the past in all the right ways — but it's far from stuck in it.",
    "favicon": "http://cdn1.vox-cdn.com/community_logos/42931/favicon.ico",
    "links": [
      { "text": "Six Thirty", "href": "http://www.sixthirty.co/" }
    ]
  }];
  return res.send(data);
  //console.log(dataObject);
  //return res.json(dataObject);
});

module.exports = router;
