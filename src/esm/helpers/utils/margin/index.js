import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var margin = function margin(options) {
  var asArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = new Array();

  for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        attribute = _Object$entries$_i[0],
        mediaQueries = _Object$entries$_i[1];

    for (var _i2 = 0, _Object$entries2 = Object.entries(mediaQueries); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          mediaQuery = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      var className = generateClassName({
        attribute: attribute,
        mediaQuery: mediaQuery,
        value: value
      });
      result.push(className);
    }
  }

  if (asArray) return result;
  return result.join(' ');
};

var generateClassName = function generateClassName(_ref) {
  var attribute = _ref.attribute,
      mediaQuery = _ref.mediaQuery,
      value = _ref.value;
  var mediaQueryAddon = mediaQuery;
  var outputValue = value;

  if (mediaQuery === 'fromXxs' || mediaQuery === 'default') {
    mediaQueryAddon = '';
  } else {
    mediaQueryAddon = "@".concat(mediaQuery.substring(4).toLowerCase(), "-up");
  }

  if (typeof value === 'number') {
    outputValue = valuesNames[Math.floor(value)];

    if (value % 1 > 0) {
      outputValue += 'Half';
    }
  }

  return "k-u-margin-".concat(attribute, "-").concat(outputValue).concat(mediaQueryAddon);
};

var valuesNames = ['none', 'single', 'double', 'triple', 'quadruple', 'quintuple', 'sextuple', 'septuble', 'octuple', 'nonuple', 'decuple'];
export default margin;