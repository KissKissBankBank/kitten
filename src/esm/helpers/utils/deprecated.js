import React, { useEffect } from 'react';
import flow from 'lodash/fp/flow';
import keys from 'lodash/fp/keys';
import intersection from 'lodash/fp/intersection';
export var Deprecated = function Deprecated(_ref) {
  var children = _ref.children,
      warningMessage = _ref.warningMessage;
  useEffect(function () {
    if (process.env.NODE_ENV === 'development') {
      var owner = React.Children.only(children)._owner;

      if (!owner) return;
      var componentName = owner.type.name;
      console.warn("Warning: " + componentName + " is deprecated.", warningMessage);
    }
  }, []);
  return children;
};
export var hasDeprecatedProps = function hasDeprecatedProps(deprecatedKeys) {
  return function (props) {
    return flow(keys, intersection(deprecatedKeys))(props).length > 0;
  };
};
export var checkDeprecatedSizes = function checkDeprecatedSizes(size) {
  var deprecatedSizes = ['tiny', 'regular', 'default', 'normal', 'big'];

  if (deprecatedSizes.includes(size)) {
    console.warn("The value " + size + " for prop size is deprecated. Please use 'small', 'medium' or 'large' instead.");
  }
};