"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prev = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var Prev = function Prev(_ref) {
  var children = _ref.children,
      hoverColor = _ref.hoverColor;
  return _react.default.createElement(_styles.LeftArrowContainerStyles, {
    hoverColor: hoverColor
  }, _react.default.createElement(_styles.ArrowIconStyle, {
    version: "solid",
    direction: "left",
    fill: "#fff"
  }), _react.default.createElement(_styles.PrevTextStyles, null, children));
};

exports.Prev = Prev;