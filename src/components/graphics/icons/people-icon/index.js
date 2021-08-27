"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var PeopleIcon = function PeopleIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "21",
    viewBox: "0 0 22 21",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M12.909 10.124A16.226 16.226 0 0115 10c5.6 0 7 2.239 7 5 0 2.309-2.447 3.553-5.294 3.899A6.063 6.063 0 0017 17l-.001-.161c.704-.121 1.362-.314 1.921-.593.578-.289 1.08-.637 1.08-1.246 0-.647-.078-1.26-.445-1.745-.652-.86-1.966-1.219-4.196-1.252a6.879 6.879 0 00-.801-.811 7.437 7.437 0 00-1.649-1.068zm-.79-8.899a4 4 0 111.646 6.581 7.03 7.03 0 00.23-2.077 2 2 0 10-.695-2.783 7.025 7.025 0 00-1.181-1.721zM7 12c5.6 0 7 2.239 7 5s-3.5 4-7 4-7-1.239-7-4 1.4-5 7-5zm0 2c2.45 0 3.869.35 4.555 1.255.367.485.445 1.098.445 1.745 0 .609-.502.957-1.08 1.246C9.852 18.778 8.423 19 7 19s-2.852-.222-3.92-.754C2.502 17.957 2 17.609 2 17c0-.647.078-1.26.445-1.745C3.131 14.35 4.55 14 7 14zM7 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 11.001 3.999A2 2 0 017 4z",
    fill: color
  }));
};

exports.PeopleIcon = PeopleIcon;
PeopleIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
PeopleIcon.defaultProps = {
  color: '#222',
  title: ''
};