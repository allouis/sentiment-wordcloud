var compose = require('../utils/compose');
var createElement = require('../dom/createElement');
var addEvent = require('../dom/addEvent');
var setHTML = require('../dom/setHTML');
var createWordClickHandler = require('./createWordClickHandler');

function createSpan(word) {
  return compose(addEvent('click', createWordClickHandler(word)), setHTML(word.value), createElement('span'));
}

module.exports = createSpan;
