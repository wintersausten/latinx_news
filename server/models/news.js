var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
  title: String,
  softTitle: String,
  date: Date,
  copyright: String,
  author: [],
  publisher: String,
  text: String,
  image: String,
  tags: [],
  videos: [],
  canonicalLink: String,
  lang: String,
  description: String,
  favicon: String,
  links: [],
  country: String,
  // category: String,
});

module.exports = mongoose.model('news', newsSchema);