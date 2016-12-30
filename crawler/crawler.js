var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');

var INIT_URL = ["http://www.bbc.com/news/world/latin_america"];
var pageVisited = {};
var pagesToVisit = [];
var relativeLinks = {};
var articles = [];
//var url = new url_parse(INIT_URL[0]);
//var baseUrl = url.protocol + "//" + url.hostname;
//pagesToVisit.push(INIT_URL[0]);

//crawl();
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
  parseArticles(relativeLinks,source);
}

function parseArticles(relativeLinks,source) {
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
              article.source = link.href
              if (article.links.length > 0){
                // render the embedded links in the article
              }
              console.log(article);
              articles.push(article);
          })
      }
    }
  }
