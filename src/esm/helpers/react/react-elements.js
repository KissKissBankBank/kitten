import React from 'react';
import isFunction from 'lodash/fp/isFunction';
import filter from 'lodash/fp/filter';
export var getReactElementsByType = function getReactElementsByType(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return React.Children.toArray(children).filter(function (child) {
    return child.type === type;
  });
};
export var getReactElementsWithoutType = function getReactElementsWithoutType(_ref2) {
  var children = _ref2.children,
      type = _ref2.type;
  return React.Children.toArray(children).filter(function (child) {
    return child.type !== type;
  });
};
export var getReactElementsByTypeArray = function getReactElementsByTypeArray(_ref3) {
  var children = _ref3.children,
      typeArray = _ref3.typeArray;
  return filter(function (child) {
    return typeArray.includes(child.type) || isFunction(child);
  })(children);
};
export var getReactElementsWithoutTypeArray = function getReactElementsWithoutTypeArray(_ref4) {
  var children = _ref4.children,
      typeArray = _ref4.typeArray;
  return filter(function (child) {
    return !typeArray.includes(child.type) || isFunction(child);
  })(children);
};