import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
export var ResponsiveIframeContainer = function ResponsiveIframeContainer(_ref) {
  var ratio = _ref.ratio,
      style = _ref.style,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["ratio", "style", "className"]);

  var componentClassName = classNames('k-ResponsiveIframeContainer', className);

  var styles = _extends({}, style, {
    paddingBottom: "".concat(ratio, "%")
  });

  return /*#__PURE__*/React.createElement("div", _extends({
    className: componentClassName,
    style: styles
  }, props));
};
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/React.createElement("iframe", null)
};