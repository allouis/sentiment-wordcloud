var curry = require('../curry');

function addEvent(event, handler, element) {
  element.addEventListener(event, handler);
  return element;
}

module.exports = curry(addEvent);
