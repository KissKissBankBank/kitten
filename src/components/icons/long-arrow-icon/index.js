"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongArrowIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var LongArrowIcon = function LongArrowIcon(_ref) {
  var direction = _ref.direction,
      disabled = _ref.disabled,
      color = _ref.color,
      title = _ref.title,
      others = (0, _objectWithoutProperties2.default)(_ref, ["direction", "disabled", "color", "title"]);
  var transform = {
    right: 'rotate(180deg)',
    left: null,
    bottom: 'rotate(-90deg)',
    top: 'rotate(90deg)'
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 10",
    fill: disabled ? _colorsConfig.default.background1 : color,
    style: {
      transform: transform[direction]
    }
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.243.757l1.414 1.415-1.829 1.827L12 4v2H3.828l1.829 1.828-1.414 1.415L0 5 4.243.757z"
  }));
};

exports.LongArrowIcon = LongArrowIcon;
LongArrowIcon.propTypes = {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LongArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
  width: '12',
  height: '10',
  color: _colorsConfig.default.font1,
  title: ''
};