"use strict";

exports.__esModule = true;
exports.computeFromRatio = void 0;

const computeFromRatio = _ref => {
  let {
    defaultWidth,
    defaultHeight,
    width,
    height
  } = _ref;
  const ratio = defaultHeight / defaultWidth;
  let computedWidth = null;
  let computedHeight = null;

  if (!width) {
    if (height) {
      computedWidth = height / ratio;
      computedHeight = height;
    } else {
      computedWidth = defaultWidth;
      computedHeight = defaultHeight;
    }
  } else {
    if (height) {
      computedWidth = width;
      computedHeight = height;
    } else {
      computedWidth = width;
      computedHeight = width * ratio;
    }
  }

  return {
    width: computedWidth,
    height: computedHeight
  };
};

exports.computeFromRatio = computeFromRatio;