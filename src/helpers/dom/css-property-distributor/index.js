"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.cssPropertyDistributor = void 0;

var _elementHelper = require("../element-helper");

var _max = _interopRequireDefault(require("lodash/fp/max"));

var _min = _interopRequireDefault(require("lodash/fp/min"));

var _typography = require("../../utils/typography");

const cssPropertyDistributor = _ref => {
  let {
    elements = [],
    property = '',
    direction = 'max'
  } = _ref;
  if (!_elementHelper.domElementHelper.canUseDom()) return null;
  if (property === '') return;
  if (!!elements) return;
  const directionGetter = {
    min: _min.default,
    max: _max.default
  };
  const propertyGetter = {
    width: _elementHelper.domElementHelper.getComputedWidth,
    height: _elementHelper.domElementHelper.getComputedHeight
  };

  if (!propertyGetter[property]) {
    return console.warn("cssPropertyDistributor warning: property has a wrong value. Accepted values are " + Object.keys(propertyGetter) + ".");
  }

  const propertyArray = elements.map(el => propertyGetter[property](el));
  const newValue = directionGetter[direction](propertyArray);
  elements.map(el => {
    el.style[property] = (0, _typography.pxToRem)(newValue);
  });
};

exports.cssPropertyDistributor = cssPropertyDistributor;