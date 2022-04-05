"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.margin = void 0;

var _capitalize = _interopRequireDefault(require("lodash/fp/capitalize"));

var margin = function margin(options, asArray) {
  if (asArray === void 0) {
    asArray = false;
  }

  var result = new Array();

  for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _Object$entries[_i],
        attribute = _Object$entries$_i[0],
        mediaQueries = _Object$entries$_i[1];

    for (var _i2 = 0, _Object$entries2 = Object.entries(mediaQueries); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _Object$entries2[_i2],
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

exports.margin = margin;

var generateClassName = function generateClassName(_ref) {
  var attribute = _ref.attribute,
      mediaQuery = _ref.mediaQuery,
      value = _ref.value;
  var mediaQueryAddon = mediaQuery;
  var outputValue = value;

  if (mediaQuery === 'fromXxs' || mediaQuery === 'default') {
    mediaQueryAddon = '';
  } else {
    mediaQueryAddon = "@" + mediaQuery.substring(4).toLowerCase() + "-up";
  }

  if (typeof value === 'number') {
    outputValue = value < 0 ? 'negative' : '';
    var valueName = valuesNames[Math.abs(Math.floor(value))];
    outputValue += value < 0 ? (0, _capitalize.default)(valueName) : valueName;

    if (value % 1 > 0) {
      outputValue += 'Half';
    }
  }

  return "k-u-margin-" + attribute + "-" + outputValue + mediaQueryAddon;
};

var valuesNames = ['none', 'single', 'double', 'triple', 'quadruple', 'quintuple', 'sextuple', 'septuble', 'octuple', 'nonuple', 'decuple'];