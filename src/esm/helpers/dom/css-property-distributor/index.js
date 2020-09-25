import domElementHelper from '../element-helper';
import max from 'lodash/fp/max';
import min from 'lodash/fp/min';
import { pxToRem } from '../../utils/typography';
export var cssPropertyDistributor = function cssPropertyDistributor(_ref) {
  var _ref$elements = _ref.elements,
      elements = _ref$elements === void 0 ? [] : _ref$elements,
      _ref$property = _ref.property,
      property = _ref$property === void 0 ? '' : _ref$property,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'max' : _ref$direction;
  if (!domElementHelper.canUseDom()) return null;
  var directionGetter = {
    min: min,
    max: max
  };
  var propertyGetter = {
    width: domElementHelper.getComputedWidth,
    height: domElementHelper.getComputedHeight
  };

  if (!propertyGetter[property]) {
    return console.warn("cssPropertyDistributor warning: property has a wrong value. Accepted values are ".concat(Object.keys(propertyGetter), "."));
  }

  var propertyArray = elements.map(function (el) {
    return propertyGetter[property](el);
  });
  var newValue = directionGetter[direction](propertyArray);
  elements.map(function (el) {
    el.style[property] = pxToRem(newValue);
  });
};