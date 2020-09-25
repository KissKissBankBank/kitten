import React from 'react';
import { StyledLeftArrowContainer, StyledPrevText, StyledArrowIcon } from './styled-components';
export var Prev = function Prev(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return /*#__PURE__*/React.createElement(StyledLeftArrowContainer, {
    hoverColor: hoverColor
  }, /*#__PURE__*/React.createElement(StyledArrowIcon, {
    version: "solid",
    direction: "left",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement(StyledPrevText, null, children));
};