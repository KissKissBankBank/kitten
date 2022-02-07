import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "suffix", "children"];
import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export var Amount = function Amount(_ref) {
  var className = _ref.className,
      suffix = _ref.suffix,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("p", _extends({
    className: classNames('k-BackingCard__drawer', 'k-BackingCard__amount__wrapper', 'k-u-align-center', className)
  }, props), /*#__PURE__*/React.createElement(Text, {
    weight: "bold",
    className: "k-BackingCard__amount k-u-block"
  }, children), suffix && /*#__PURE__*/React.createElement(Text, {
    weight: "regular",
    transform: "uppercase",
    letterSpacing: "10%",
    className: "k-BackingCard__amount__suffix k-u-block"
  }, suffix));
};