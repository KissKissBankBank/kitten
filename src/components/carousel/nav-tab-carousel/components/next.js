"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Next = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Next = function Next(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return _react.default.createElement(_styles.RightArrowContainerStyles, {
    hoverColor: hoverColor
  }, _react.default.createElement(_styles.NextTextStyles, null, children), _react.default.createElement(_styles.ArrowIconStyle, {
    version: "solid",
    fill: "#fff"
  }));
};

exports.Next = Next;