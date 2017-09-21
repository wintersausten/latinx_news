var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
  title: String,
  date: Date,
  author: [String],
  publisher: String,
  text: String,
  links: [String],
  image: String,
  source: String,
  country: String,
},{
  timestamps: true
});

module.exports = mongoose.model('News', newsSchema);