"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.margin = void 0;

var _capitalize = _interopRequireDefault(require("lodash/fp/capitalize"));

const margin = function (options, asArray) {
  if (asArray === void 0) {
    asArray = false;
  }

  const result = new Array();

  for (const [attribute, mediaQueries] of Object.entries(options)) {
    for (const [mediaQuery, value] of Object.entries(mediaQueries)) {
      const className = generateClassName({
        attribute,
        mediaQuery,
        value
      });
      result.push(className);
    }
  }

  if (asArray) return result;
  return result.join(' ');
};

exports.margin = margin;

const generateClassName = _ref => {
  let {
    attribute,
    mediaQuery,
    value
  } = _ref;
  let mediaQueryAddon = mediaQuery;
  let outputValue = value;

  if (mediaQuery === 'fromXxs' || mediaQuery === 'default') {
    mediaQueryAddon = '';
  } else {
    mediaQueryAddon = "@" + mediaQuery.substring(4).toLowerCase() + "-up";
  }

  if (typeof value === 'number') {
    outputValue = value < 0 ? 'negative' : '';
    const valueName = valuesNames[Math.abs(Math.floor(value))];
    outputValue += value < 0 ? (0, _capitalize.default)(valueName) : valueName;

    if (value % 1 > 0) {
      outputValue += 'Half';
    }
  }

  return "k-u-margin-" + attribute + "-" + outputValue + mediaQueryAddon;
};

const valuesNames = ['none', 'single', 'double', 'triple', 'quadruple', 'quintuple', 'sextuple', 'septuble', 'octuple', 'nonuple', 'decuple'];