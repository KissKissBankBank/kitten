"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var ArrowIcon = function ArrowIcon(_ref) {
  var direction = _ref.direction,
      disabled = _ref.disabled,
      color = _ref.color,
      title = _ref.title,
      others = (0, _objectWithoutProperties2.default)(_ref, ["direction", "disabled", "color", "title"]);
  var transform = {
    right: 'rotate(90deg)',
    left: 'rotate(-90deg)',
    bottom: 'rotate(180deg)',
    top: null
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 8.48 5.64",
    fill: disabled ? _colorsConfig.default.background1 : color,
    style: {
      transform: transform[direction]
    }
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z"
  }));
};

exports.ArrowIcon = ArrowIcon;
ArrowIcon.propTypes = {
  direction: _propTypes.default.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
  color: _colorsConfig.default.font1,
  title: ''
};