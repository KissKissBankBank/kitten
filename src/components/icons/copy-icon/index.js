"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var CopyIcon = function CopyIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M21.607 6.05l-7.071 7.071L12.414 11 11 12.414l2.121 2.122-7.07 7.07L.392 15.95l7.071-7.071L9.586 11 11 9.586 8.879 7.464l7.07-7.07 5.658 5.656zm-11.314 8.486l-.707-.708-1.414 1.415-1.415-1.415 1.415-1.414-.708-.707-4.242 4.243 2.828 2.828 4.243-4.242zm8.485-8.486L15.95 3.222l-4.243 4.242.707.708 1.414-1.415 1.415 1.415-1.415 1.414.708.707 4.242-4.243z",
    fill: color
  }));
};

exports.CopyIcon = CopyIcon;
CopyIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
CopyIcon.defaultProps = {
  color: '#000',
  title: ''
};