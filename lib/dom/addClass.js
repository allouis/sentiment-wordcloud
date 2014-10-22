var curry = require('../utils/curry');

function addClass(classname, element) {
  var classes = (element.className).split(' ');
  if (classes.indexOf(classname) === -1) {
    classes.push(classname);
  }
  element.className = classes.join(' ');
  return element;
}

module.exports = curry(addClass);
