"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.InstrumentTagIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const InstrumentTagIcon = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 9 11",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "9,11 0,11 0,0 5,0 5,4 9,4"
  }), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "9,3 6,3 6,0"
  }));
};

exports.InstrumentTagIcon = InstrumentTagIcon;
InstrumentTagIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
InstrumentTagIcon.defaultProps = {
  color: '#333',
  title: ''
};