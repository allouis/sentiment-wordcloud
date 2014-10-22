var curry = require('../utils/curry');

function appendTo (container, elem) {
  container.appendChild(elem);
  return elem;
}

module.exports = curry(appendTo);
