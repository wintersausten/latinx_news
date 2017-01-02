var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');

var INIT_URL = ["http://www.bbc.com/news/world/latin_america"];
var pageVisited = {};
var pagesToVisit = [];
var relativeLinks = {};
//var articles = new Array;
//var url = new url_parse(INIT_URL[0]);
//var baseUrl = url.protocol + "//" + url.hostname;
//pagesToVisit.push(INIT_URL[0]);

//crawl();
var array = new Array;
function article(title, date, copyright, author, publisher, text, links, image,source){
    this.title = title;
    this.date = date;
    this.copyright = copyright;
    this.author = author;
    this.publisher = publisher;
    this.text = text;
    this.links = links.map(function(a){
        return a.href;
    });
    this.image = image;

    this.source = source;
}

start();


function start() { // start of crawling
  var sources = {};
  for(var urlIndex in INIT_URL){
    var url = new url_parse(INIT_URL[urlIndex]);
    var baseUrl = url.protocol + "//" + url.hostname;
    var pathname = url.pathname;
    sources.baseUrl = baseUrl;
    sources.href = INIT_URL[urlIndex];
    sources.pathname = pathname;
    pagesToVisit.push(sources);
  }

  crawl();
}

function crawl() {
  var nextSource = pagesToVisit.pop();
  if(nextSource in pageVisited){
    crawl();
  }
  else {
    visitPage(nextSource,crawl);
  }
}

function visitPage(source, callback){
  pageVisited[source] = true;
  request(source.href, function(error, response, body) {
    if (error){
      return console.log('Error:', error);
    }
    if(response.statusCode !== 200){
      console.log('Invalid Status Code Returned', response.statusCode);
      callback();
      return;
    }
    var $ = cheerio.load(body);
    collectLinks($,source);

  });
}

function collectLinks($,source) {
  var relLinks = [];
  var links = $("a[href^='/']");
  links.each(function(){
    if ($(this).attr('href').match(/-\d+$/) != null) {
      relLinks.push(source.baseUrl + $(this).attr('href'));
    }
  });
  relativeLinks[source] = relLinks;
  var articles = parseArticles(relativeLinks,source);
  console.log(articles);

}

function parseArticles(relativeLinks,source) {
    var data = {};
    var articles = new Array;
    for(key in relativeLinks){
        for (links in relativeLinks[key])
        {
            var link = new url_parse(relativeLinks[key][links]);
            request(link.href, function(error, response, body) {
                if (error){
                    return console.log('Error:', error);
                }
                if(response.statusCode !== 200){
                    console.log('Invalid Status Code Returned', response.statusCode);
                    return;
                }
                var data = extractor(body);
                array.push(data);
                var Article = new article(data.title, data.date, data.copyright, data.author, data.publisher, data.text, data.links, data.image,link.href);
                articles.push(Article);
            })
        }
    }
    return articles;
}
