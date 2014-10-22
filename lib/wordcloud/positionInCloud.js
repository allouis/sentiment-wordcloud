var compose = require('../utils/compose');
var curry = require('../utils/curry');
var place = require('../shape/place');
var intersects = require('../shape/intersects');

function addToCloud (placeInCloud, shape, index, shapes) {
  var angle = 0; 
  do {
    placeInCloud(shape, angle++);
  } while ( shapes.slice(0, index).some(intersects(shape)) )
} 

module.exports = compose(curry(addToCloud), place);
