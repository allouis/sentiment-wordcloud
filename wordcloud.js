var each = require('./lib/utils/each');
var map = require('./lib/utils/map');
var compose = require('./lib/utils/compose');

var parseTopic = require('./lib/wordcloud/parseTopic');
var sortByVolume = require('./lib/wordcloud/sortByVolume');
var setWordSize = require('./lib/wordcloud/setWordSize');
var createShapes = require('./lib/shape/createShapeObject');
var appendTo = require('./lib/dom/appendTo');
var createSpan = require('./lib/wordcloud/createSpans');
var setWordColour = require('./lib/wordcloud/setWordColour');

function wordcloud(opts) {
  var cloudEl = opts.cloudEl;
  var metadataEl = opts.metadataEl;
  var positionInCloud = require('./lib/wordcloud/positionInCloud')(cloudEl);
  return compose(
    each(positionInCloud),
    map(createShapes),
    map(appendTo(cloudEl)),
    map(createSpan(metadataEl)),
    map(setWordColour),
    map(setWordSize),
    sortByVolume,
    map(parseTopic)
  );
}

module.exports = wordcloud;
