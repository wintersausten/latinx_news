var express = require('express');
var request = require('request');
var extractor = require('unfluff');
var url_parse = require('url-parse');
var cheerio = require('cheerio');
var pageVisited = {};
var pagesToVisit = [];
var relativeLinks = {};
var Promise = require("bluebird");
//var articles = new Array;


//crawl();
var array = new Array;
function article(title, date, copyright, author, publisher, text, links, image){
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
}

function start(INIT_URL) { // start of crawling
  var sources = {};
  var url = new url_parse(INIT_URL);
  var baseUrl = url.protocol + "//" + url.hostname;
  var pathname = url.pathname;
  sources.baseUrl = baseUrl;
  sources.href = INIT_URL;
  sources.pathname = pathname;
  pagesToVisit.push(sources);
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
    //console.log(body)
    var $ = cheerio.load(body);
    relLinks = collectLinks($,source);
    var articles = parseArticles(relLinks,source)
  });
}

function collectLinks($,source) {
    var relLinks = [];
    var links = $("a[href^='/']");
    //console.log(links)
    links.each(function(){
        relLinks.push(source.baseUrl + $(this).attr('href'));
    });
    //relativeLinks[source] = relLinks;
    //var articles = parseArticles(relativeLinks,source);
    return relLinks;
}

function requestWrapper(link){
    return new Promise(function(resolve, reject){
        var body = '';
        var req = request(link, {timeout: 10000, pool: false});
        req.setMaxListeners(0);
        req.on('error', function(error){
            return reject(error);
        });
        req.on('response', function(res){
            var body = '';
            if (res.statusCode != 200){
                err = new Error("Unexpected status code: " + res.statusCode);
                err.res = res;
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

function parseArticles(relativeLinks,source) {
    var articles = [];
    const promises = relativeLinks.map(url => requestWrapper(url));
    Promise.all(promises.map(function(promise){
        return promise.reflect();
    })).filter(function(promise){
        return promise.isFulfilled();
    }).then(function(responses){
        responses.forEach(function(response){
            if(response.isFulfilled()){
                var data = extractor(response.value());
                if(data.text != '' && data.date != null){
                    var Article = new article(data.title, data.date, data.copyright,
                        data.author, data.publisher, data.text, data.links, data.image);
                    //articles.push(Article);
                    console.log(Article)
                    // upload the article here
                }
            }
            else { 
                console.log("not fullfilled")
            }
        })
    })
};
var INIT_URL = "http://www.la-razon.com/";
start(INIT_URL);