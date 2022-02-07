import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import classNames from 'classnames';
export var TagList = function TagList(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-BackingCard__tagList', 'k-BackingCard__drawer', className)
  }, props));
};