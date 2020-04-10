"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Next = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

var Next = function Next(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledRightArrowContainer, {
    hoverColor: hoverColor
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledNextText, null, children), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledArrowIcon, {
    version: "solid",
    fill: "#fff"
  }));
};

exports.Next = Next;