import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import classNames from 'classnames';
export var Options = function Options(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-RewardSummaryCard__options', 'k-u-hidden@xs-down', className)
  }, props));
};