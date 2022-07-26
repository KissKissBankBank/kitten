"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LargeArrowIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

const LargeArrowIconNext = _ref => {
  let {
    direction,
    color,
    title,
    ...others
  } = _ref;
  const transform = {
    right: 'rotate(90deg)',
    left: 'rotate(-90deg)',
    down: 'rotate(180deg)',
    up: null
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, others, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 20",
    fill: color,
    style: {
      transform: transform[direction]
    }
  }), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "m6.3806 0 2.357 2.357 3.536 3.536c.651.65.651 1.706 0 2.357-.651.65-1.706.651-2.357 0l-1.869-1.869v11.952c0 .921-.746 1.667-1.667 1.667-.92 0-1.666-.746-1.666-1.667V6.381L2.8456 8.25c-.651.651-1.706.651-2.357 0-.651-.651-.651-1.707 0-2.357l3.535-3.536L6.3806 0Z"
  }));
};

exports.LargeArrowIconNext = LargeArrowIconNext;
LargeArrowIconNext.propTypes = {
  direction: _propTypes.default.oneOf(['up', 'down', 'left', 'right']),
  className: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LargeArrowIconNext.defaultProps = {
  direction: 'right',
  className: '',
  width: '13',
  height: '20',
  color: _colorsConfig.default.font1,
  title: ''
};