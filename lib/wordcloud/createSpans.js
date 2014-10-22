var compose = require('../utils/compose');
var curry = require('../utils/curry');
var createElement = require('../dom/createElement');
var addEvent = require('../dom/addEvent');
var addClass = require('../dom/addClass');
var setHTML = require('../dom/setHTML');
var createWordClickHandler = require('./createWordClickHandler');

function createSpan(metadataEl, word) {
  return compose(
    addEvent('click', createWordClickHandler(metadataEl, word)),
    addClass('word'),
    setHTML(word.value),
    createElement('span')
  );
}

module.exports = curry(createSpan);
