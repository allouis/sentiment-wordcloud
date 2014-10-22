var metadataTemplate = require('../../templates/metadata.hbs');
var setHTML = require('../dom/setHTML');
var bind = require('../utils/bind');

function createWordClickHandler (metadata, word) {
  return bind(setHTML, metadataTemplate(word), metadata);
}

module.exports = createWordClickHandler;
