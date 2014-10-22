var curry = require('../utils/curry');

function setHTML(html, element) {
  element.innerHTML = html;
  return element;
}

module.exports = curry(setHTML);
