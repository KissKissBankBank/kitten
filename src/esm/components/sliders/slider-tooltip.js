import React from 'react';
import classNames from 'classnames';
export var SliderTooltip = function SliderTooltip(_ref) {
  var className = _ref.className,
      percentage = _ref.percentage,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('k-SliderTooltip', className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-SliderTooltip__tip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-SliderTooltip__tip__content",
    style: {
      left: percentage
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "k-SliderTooltip__arrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-SliderTooltip__arrow__content",
    style: {
      left: percentage
    }
  })));
}; // DEPRECATED: do not use default export.

export default SliderTooltip;