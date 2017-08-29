var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
	title: String,
	author: String,
	content: String,
	country: String,
});

module.exports = mongoose.model('article', articleSchema);