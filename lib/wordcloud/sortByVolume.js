var sort = require('../utils/sort');

function byVolume (a, b) {
  return b.volume - a.volume;
}

module.exports = sort(byVolume);
