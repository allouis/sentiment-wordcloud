function compose(/* fns... */) {
  var fns = arguments;
  return function composed(x) {
    var num = fns.length;
    while (num) {
      x = fns[--num].call(null, x);
    }
    return x;
  };
}

module.exports = compose;
