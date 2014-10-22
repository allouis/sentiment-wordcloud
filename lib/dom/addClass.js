var curry = require('../utils/curry');

function addClass(classname, element) {
  element.className += classname; 
  return element;
}

module.exports = curry(addClass);
