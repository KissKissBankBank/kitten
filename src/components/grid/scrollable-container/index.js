"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var ScrollableContainer = function ScrollableContainer(props) {
  return _react.default.createElement(_styled.StyledContainer, props, _react.default.createElement(_styled.StyledScrollableContainer, null, props.children), _react.default.createElement(_styled.StyledLeftGradient, null), _react.default.createElement(_styled.StyledRightGradient, null));
};

exports.ScrollableContainer = ScrollableContainer;