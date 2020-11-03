import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var Row = function Row(_ref) {
  var className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      light = _ref.light,
      dark = _ref.dark,
      lightTopBorder = _ref.lightTopBorder,
      lightBottomBorder = _ref.lightBottomBorder,
      padded = _ref.padded,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["className", "contentClassName", "centered", "light", "dark", "lightTopBorder", "lightBottomBorder", "padded", "children"]);

  var rowClassName = classNames('k-Row', {
    'k-Row--centered': centered,
    'k-Row--light': light,
    'k-Row--dark': dark,
    'k-Row--lightTopBorder': lightTopBorder,
    'k-Row--lightBottomBorder': lightBottomBorder,
    'k-Row--padded': padded
  }, className);
  var rowContentClassName = classNames('k-Row__content', contentClassName);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: rowClassName
  }, others), /*#__PURE__*/React.createElement("div", {
    className: rowContentClassName
  }, children));
};
Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false
};