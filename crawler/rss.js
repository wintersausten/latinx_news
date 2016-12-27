var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');
var FeedParser = require('feedparser')


var pageVisited = {};
var pagesToVisit = [];
var relativeLinks = {};
var articles = [];


var feeds = [];

fetch("http://feeds.bbci.co.uk/news/world/latin_america/rss.xml",parse);

function getArticles(feeds){

}

function parse(posts){
    for (p in posts){
        var feedItem = {};
        feedItem.title = posts[p].title;
        feedItem.description = posts[p].description;
        feedItem.summary = posts[p].summary;
        feedItem.link = posts[p].link;
        feedItem.date = posts[p].date;
        feedItem.pubdate = posts[p].pubdate;
        feedItem.author = posts[p].author;
        feedItem.guid = posts[p].guid;
        feedItem.categories = posts[p].categories;

        feeds.push(feedItem);
    }
    feeds.forEach(function(item){
        request(item.link, function(error, response, body) {
          if (error){
            return console.log('Error:', error);
          }
          if(response.statusCode !== 200){
            console.log('Invalid Status Code Returned', response.statusCode);
            return;
          }
          var article = {};
          var data = extractor(body);

          article.title = data.title;
          article.date = data.date;
          article.copyright = data.copyright;
          article.author = data.author;
          article.publisher = data.publisher;
          article.text = data.text;
          article.links = data.links; // an array of links
          article.image = data.image;
          article.videos = data.videos;
          article.source = item.link;
          if (article.links.length > 0){
            // render the embedded links in the article
          }
          console.log(article);
          articles.push(article);
      })
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
        console.log("done");
    })
}
