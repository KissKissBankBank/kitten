"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssPropertyDistributor = void 0;

var _elementHelper = _interopRequireDefault(require("../element-helper"));

var _max = _interopRequireDefault(require("lodash/fp/max"));

var _min = _interopRequireDefault(require("lodash/fp/min"));

var _typography = require("../../utils/typography");

var cssPropertyDistributor = function cssPropertyDistributor(_ref) {
  var _ref$elements = _ref.elements,
      elements = _ref$elements === void 0 ? [] : _ref$elements,
      _ref$property = _ref.property,
      property = _ref$property === void 0 ? '' : _ref$property,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'max' : _ref$direction;
  if (!_elementHelper.default.canUseDom()) return null;
  var directionGetter = {
    min: _min.default,
    max: _max.default
  };
  var propertyGetter = {
    width: _elementHelper.default.getComputedWidth,
    height: _elementHelper.default.getComputedHeight
  };

  if (!propertyGetter[property]) {
    return console.warn("cssPropertyDistributor warning: property has a wrong value. Accepted values are ".concat(Object.keys(propertyGetter), "."));
  }

  var propertyArray = elements.map(function (el) {
    return propertyGetter[property](el);
  });
  var newValue = directionGetter[direction](propertyArray);
  elements.map(function (el) {
    el.style[property] = (0, _typography.pxToRem)(newValue);
  });
};

exports.cssPropertyDistributor = cssPropertyDistributor;