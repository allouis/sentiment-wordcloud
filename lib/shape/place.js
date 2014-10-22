var curry = require('../utils/curry');
// We use an archimedian spiral to place the "shapes" on creating a cloud structure;
// Polar co-ordinate system:
// r = a + b*theta
// a -> rotation of spiral
// b -> distance between each turn
// To convert:
// x = r * cos(theta);
// y = r * sin(theta);
// substitute r:
// x = (a + b*theta) * cos(theta);
// y = (a + b*theta) * sin(theta);

function place(container, shape, angle) {
  var a = 0;
  var b = 5;
  var dX = b*angle*Math.cos(angle);
  var dY = b*angle*Math.sin(angle);
  shape.x = (container.clientWidth/2) + dX;
  shape.y = (container.clientHeight/2) + dY;
  return shape;
}

module.exports = curry(place);
