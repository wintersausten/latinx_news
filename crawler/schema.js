var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    categories: [String],
    date: Date,
    author: [String],
    publisher: String,
    text: String,
    links: [String],
    image: String,
    source: String

}, {
    timestamps: true
});

var Articles = mongoose.model('Article', articleSchema);
