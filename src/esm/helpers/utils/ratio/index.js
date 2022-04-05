export var computeFromRatio = function computeFromRatio(_ref) {
  var defaultWidth = _ref.defaultWidth,
      defaultHeight = _ref.defaultHeight,
      width = _ref.width,
      height = _ref.height;
  var ratio = defaultHeight / defaultWidth;
  var computedWidth = null;
  var computedHeight = null;

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