import React from 'react';
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