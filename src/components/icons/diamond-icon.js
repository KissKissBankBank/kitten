"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiamondIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var DiamondIcon = function DiamondIcon(_ref) {
  var title = _ref.title,
      color = _ref.color,
      others = (0, _objectWithoutProperties2.default)(_ref, ["title", "color"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "28",
    viewBox: "0 0 19 28"
  }, others), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    fill: color,
    fillRule: "evenodd",
    d: "M14 14l-4 10-4-10h8zm5 0l-7 10 4-10h3zM4 14l4 10-7-10h3zm8-6l2 4H6l2-4h4zm3 0l4 4h-3l-2-4h1zM6 8l-2 4H1l4-4h1zm12.1070508-5.64951905l.75 1.2990381-3.4641016 2.00000005-.75-1.2990382 3.4641016-1.99999995zm-16.7141016 0L4.8570508 4.3504809l-.75 1.2990382L.6429492 3.64951905l.75-1.2990381zM10.5 0v4H9V0h1.5z"
  }));
};

exports.DiamondIcon = DiamondIcon;
DiamondIcon.defaultProps = {
  title: null,
  color: _colorsConfig.default.background1
};
DiamondIcon.propTypes = {
  title: _propTypes.default.string,
  color: _propTypes.default.string
};