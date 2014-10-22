var compose = require('../utils/compose');
var curry = require('../utils/curry');
var bind = require('../utils/bind');
var get = require('../utils/get');
var set = require('../utils/set');

var deferredGet = curry(bind, 3)(get);

function appendPx (val) {
  return val + 'px';
}

function toInt(num) {
  return parseInt(num || 0, 10);
}

function createShapeObject(el) {
  var shape = {
    el: el
  };
  Object.defineProperties(shape, {
    left: {
      get: compose(toInt, deferredGet('left', el.style)) 
    },
    width: {
      get: deferredGet('clientWidth', el)
    },
    right: {
      get: function () { return this.left + this.width }
    },
    bottom: {
      get: compose(toInt, deferredGet('bottom', el.style))
    },
    height: {
      get: deferredGet('clientHeight', el)
    },
    top: {
      get: function () { return this.bottom + this.height }
    },
    x: {
      get: compose(toInt, deferredGet('left', el.style)),
      set: compose(set('left', el.style), appendPx) 
    },
    y: {
      get: compose(toInt, deferredGet('bottom', el.style)),
      set: compose(set('bottom', el.style), appendPx)
    }
  });
  return shape;
}

module.exports = createShapeObject;
