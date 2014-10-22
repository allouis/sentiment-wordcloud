// Get elements
var cloud = document.querySelector('#wordcloud');
var metadata = document.querySelector('#metadata');
// Get data
var topics = require('./data/topics.json').topics;

var wordcloud = require('./wordcloud')({
  cloudEl: cloud,
  metadataEl: metadata
});

// make our wordcloud!
wordcloud(topics);
