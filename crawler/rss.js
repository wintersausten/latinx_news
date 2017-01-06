var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');
var FeedParser = require('feedparser');
var mongoose = require('mongoose');
<<<<<<< HEAD
// connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/temp");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    copyright: String,
    categories: [String],
    //date: Date,
    author: [String],
    publisher: String,
    text: String,
    links: [String],
    image: String,
    source: String

}, {
    timestamps: true
});

var Article = mongoose.model('Article', articleSchema);
=======
var assert = require('assert');

var Article = require("./schema");
>>>>>>> modified to use Promises

var feeds = [];
var articles = [];

var url = 'mongodb://localhost:27017/latinx_news';
//mongoose.connect(url);


fetch("https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&output=rss",parse);

function uploadArticle(article){
<<<<<<< HEAD
  var newArticle = new Article(article, false);

  //console.log(newArticle);

  newArticle.save(function(err){
    console.log('inside save function');
    if(err) {
      console.log(err);
    }
    else {
      console.log('Article created');
    }
  });
  /*var url = 'mongodb://localhost:27017/latinx_news';
  mongoose.connect(url);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
      console.log("Connected correctly to server");
      var newArticle = Article(article);
      newArticle.save(function (err) {
          if (err) throw err;
          console.log('Article created');
      });
  });*/
}

function article(title, categories, date, copyright, author, publisher, text, links, image,source){
=======
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected correctly to server");
        var newArticle = Article(article);
        newArticle.save(function (err) {
            if (err) throw err;
            console.log('Article created');
        });
    });
}

function _article(title, date, copyright, author, publisher, text, links, image){
>>>>>>> modified to use Promises
    this.title = title;
    this.date = new Date(date);
    this.copyright = copyright;
    this.author = author;
    this.publisher = publisher;
    this.text = text;
    this.links = links.map(function(a){
        return a.href;
    });
    this.image = image;
<<<<<<< HEAD

    this.source = source;
=======
    return this;
>>>>>>> modified to use Promises
}

function parse(posts){
    for (p in posts){
        feeds.push(posts[p].link);
    }
<<<<<<< HEAD
    feeds.forEach(function(item)
    {
        var body = '';
        var req = request(item.link, {timeout: 10000, pool: false});
        req.on('error', function(error){
            console.log(item.link+" : "+err);
        })
        req.on('data', function(chunk){
            body += chunk;
        })
        req.on('end', function() {
            var data = extractor(body);
            var Article = new article(data.title, item.categories, data.date, data.copyright, data.author, data.publisher, data.text, data.links, data.image,item.link);
            //console.log(Article)
            uploadArticle(Article);
        })
    })
=======
    const promises = feeds.map(url => fetchArticles(url));
    Promise.all(promises).then(function(responses){
        responses.forEach(function(response){
            var data = extractor(response);
            var Article = new _article(data.title, data.date, data.copyright,
                data.author, data.publisher, data.text, data.links, data.image);
            articles.push(Article);
        });
        console.log(articles);
    });
>>>>>>> modified to use Promises
}


// to handle multiple RSS links synchronously
<<<<<<< HEAD
var multiRequest = function (urls, callback) {
=======

function asyncRequest (urls, callback) {
>>>>>>> modified to use Promises
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
        request(url, function(error, response, body){
            if(error){
                return reject(error);
            }
            else if(response.statusCode != 200) {
                err = new Error("Unexpected status code: " + response.statusCode);
                err.res = response;
                return reject(err);
            }
            resolve(body);
        });
    });
}


function fetch(feed,callback) {
    var posts = [];
    var req = request(feed, {timeout: 10000, pool: false});
    req.setMaxListeners(50);
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
    })
}

mongoose.connection.close();
