var first = require('../utils/first');
var last = require('../utils/last');
var get = require('../utils/get');
var compose = require('../utils/compose');

// We use a logarithmic scale to normalise the distance between
// very high and very small values.
var log = Math.log.bind(Math);

var logVolume = compose(log, get('volume'));
var getMin = compose(logVolume, last);
var getMax = compose(logVolume, first);

function setWordSize(word, index, words) {
  var min = getMin(words);
  var max = getMax(words);
  var val = log(word.volume);
  word.size = Math.floor((val / (max - min)) / 0.16);
  return word;
}

module.exports = setWordSize;
