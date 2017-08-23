var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');
var FeedParser = require('feedparser');
require('./schema');
var mongoose = require('mongoose');
mongoose.set('debug', true);
var assert = require('assert');

var feeds = [];
var articles = [];

fetch("http://feeds.bbci.co.uk/news/world/latin_america/rss.xml",parse);

function uploadArticle(articles){
  mongoose.connect('mongodb://localhost:27017/test_db');
  var Article = mongoose.model('Article');
  console.log('uploading articles...');
  for (a in articles){
    var newArticle = new Article(articles[a]);
    newArticle.save(function(err, data){
      if (err) {
        console.log(err);
      }
      else {
        console.log('saved');
      }
    });
  }
  mongoose.connection.close();
}

function _article(title, date, copyright, author, publisher, text, links, image){
    this.title = title;
    //this.date = new Date(date);
    this.copyright = copyright;
    this.author = author;
    this.publisher = publisher;
    this.text = text;
    this.links = links.map(function(a){
        return a.href;
    });
    this.image = image;
    return this;
}

function parse(posts){
    for (p in posts){
        feeds.push(posts[p].link);
    }
    const promises = feeds.map(url => fetchArticles(url));
    Promise.all(promises).then(function(responses){
        responses.forEach(function(response){
            var data = extractor(response);
            var Article = new _article(data.title, data.date, data.copyright,
                data.author, data.publisher, data.text, data.links, data.image);
            articles.push(Article);
        });
        //console.log(articles);
        uploadArticle(articles);
    });
}


// to handle multiple RSS links synchronously

function asyncRequest (urls, callback) {
    var results = {}, t = urls.length, c = 0,
    handler = function (error, response, body) {
        var url = response.request.uri.href;
        results[url] = { error: error, response: response, body: body };
        if (++c === urls.length) { callback(results); }
    };
    while (t--) {
        request(urls[t].link, handler);
    }
};



function fetchArticles(url){
    return new Promise(function(resolve, reject){
        var body = '';
        var req = request(url, {timeout: 10000, pool: false});
        req.setMaxListeners(0);
        req.on('error', function(error){
            return reject(error);
        });
        req.on('response', function(res){
            var body = '';
            if (res.statusCode != 200){
                err = new Error("Unexpected status code: " + res.statusCode);
                err.res = response;
                return reject(err);
            }
            res.on('data', function(chunk){
                body += chunk;
            });
            res.on('end', function(){
                resolve(body);
            });
        });
    });
}


function fetch(feed,callback) {
    var posts = [];
    var req = request(feed, {timeout: 10000, pool: false});
    req.setMaxListeners(0);
    // Some feeds do not respond without user-agent and accept headers.
    req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
    req.setHeader('accept', 'text/html,application/xhtml+xml');

    var feedparser = new FeedParser();

    req.on('error', function(error){
        console.log(feed+" : "+err);
    });
    req.on('response', function(res) {
        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
        res.pipe(feedparser);
    });

    feedparser.on('error', function(err){
        console.log(feed+" : "+err);
    })
    feedparser.on('readable', function() {
        var stream = this, item;
        while (item = stream.read()) {
            //console.log('Got article: %s', item.title || item.description);
            posts.push(item);
        }
    })
    feedparser.on('end', function(){
        callback(posts);
        console.log("done");
    })
}
