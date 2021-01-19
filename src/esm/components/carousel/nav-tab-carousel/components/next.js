import React from 'react';
import { StyledRightArrowContainer, StyledNextText, StyledArrowIcon } from './styled-components';
export var Next = function Next(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return /*#__PURE__*/React.createElement(StyledRightArrowContainer, {
    hoverColor: hoverColor
  }, /*#__PURE__*/React.createElement(StyledNextText, null, children), /*#__PURE__*/React.createElement(StyledArrowIcon, {
    version: "solid",
    fill: "#fff"
  }));
};