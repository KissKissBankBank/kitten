import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var Separator = function Separator(_ref) {
  var darker = _ref.darker,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["darker", "className"]);

  var separatorClassName = classNames('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: separatorClassName
  }, props));
};
Separator.defaultProps = {
  className: null,
  darker: false
};