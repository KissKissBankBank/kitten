"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prev = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components");

var Prev = function Prev(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledLeftArrowContainer, {
    hoverColor: hoverColor,
    as: "button",
    className: "k-u-reset-button"
  }, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledArrowIcon, {
    version: "solid",
    direction: "left",
    fill: "#fff"
  }), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledPrevText, null, children));
};

exports.Prev = Prev;