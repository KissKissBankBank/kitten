import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import classNames from 'classnames';
export var VisuallyHidden = function VisuallyHidden(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("span", _extends({
    className: classNames(className, 'k-u-a11y-visuallyHidden')
  }, props));
};