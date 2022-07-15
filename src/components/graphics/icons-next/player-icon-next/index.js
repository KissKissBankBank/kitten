"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PlayerIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title", "direction"];

var PlayerIconNext = function PlayerIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      direction = _ref.direction,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "90",
    height: "90",
    viewBox: "0 0 90 90",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    cx: "45",
    cy: "45",
    r: "44.5",
    fill: "var(--color-grey-900)",
    stroke: "var(--color-grey-000)",
    strokeWidth: "1",
    opacity: "var(--player-icon-opacity, 0.8)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "var(--color-grey-000)",
    d: "M60 43.27a2 2 0 0 1 0 3.46L39 58.86a2 2 0 0 1-3-1.74V32.88a2 2 0 0 1 3-1.74l21 12.13Z"
  }));
};

exports.PlayerIconNext = PlayerIconNext;
PlayerIconNext.propTypes = {
  title: _propTypes.default.string
};
PlayerIconNext.defaultProps = {
  title: null
};