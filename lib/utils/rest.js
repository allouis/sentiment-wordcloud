function rest(list) {
  return Array.prototype.slice.call(list, 1);
}

module.exports = rest;
