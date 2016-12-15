var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var Boilerpipe = require('boilerpipe');

var pageURL = 'http://output.jsbin.com/xavuga';

function scrapePage () {
    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml){

        //write the entire scraped page to the local file system
        fs.writeFile(__dirname + '/HTML/entire-page.html', responseHtml, function(err){
            if (err)
              console.log(err);
            else
              console.log('entire-page.html successfully written to HTML folder');
        })
    }) ;
}

//scrape the page
//scrapePage();

function extractPage() {
    var boilerpipe = new Boilerpipe({
        extractor: Boilerpipe.Extractor.Article,
        url: 'http://www.bbc.com/news/world-latin-america-38314440'
    });
    boilerpipe.getText(function(err,text){
        console.log(text);
    });
}

extractPage();

