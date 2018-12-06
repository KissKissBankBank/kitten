"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRangeFromZeroTo = void 0;

var createRangeFromZeroTo = function createRangeFromZeroTo(num) {
  var array = [];

  if (!Number.isInteger(num)) {
    return array;
  }

  for (var i = 0; i < num; i++) {
    array.push(i);
  }

  return array;
};

exports.createRangeFromZeroTo = createRangeFromZeroTo;