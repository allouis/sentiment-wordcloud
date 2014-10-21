function array(list) {
  return Array.prototype.slice.call(list, 0);
}

module.exports = array;
