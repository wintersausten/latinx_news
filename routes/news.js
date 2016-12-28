var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var News = mongoose.model('News');

// GET news listing
router.get('/', function(req, res){
  News.find(function(err, news){
    if (err){
      return res.status(500).send(err);
    }
    return res.status(200).send(news);
  });
});

router.get('/:id', function(req, res){
  News.findOne({_id: new Object(req.params.id)}, function(err, news){
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).json(news);
  });
});

module.exports = router;
