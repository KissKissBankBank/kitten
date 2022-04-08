"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LongArrowIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["direction", "color"];

var LongArrowIconNext = function LongArrowIconNext(_ref) {
  var direction = _ref.direction,
      color = _ref.color,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var transform = {
    right: 'rotate(-90deg)',
    left: 'rotate(90deg)',
    down: null,
    up: 'rotate(180deg)'
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 23 33",
    fill: color,
    style: {
      transform: transform[direction]
    }
  }, others), /*#__PURE__*/_react.default.createElement("path", {
    d: "m22.56 23.01-9.55 9.55a1.5 1.5 0 0 1-2.12 0l-9.54-9.55a1.5 1.5 0 1 1 2.12-2.12l6.98 6.99V1.5a1.5 1.5 0 1 1 3 0v26.38l6.99-6.99a1.5 1.5 0 0 1 2.12 2.12Z"
  }));
};

exports.LongArrowIconNext = LongArrowIconNext;
LongArrowIconNext.propTypes = {
  direction: _propTypes.default.oneOf(['up', 'down', 'left', 'right']),
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string
};
LongArrowIconNext.defaultProps = {
  direction: 'right',
  width: '23',
  height: '33',
  color: _colorsConfig.default.font1
};