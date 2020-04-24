"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var LinkIcon = function LinkIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M15.556 0l5.657 5.657-7.07 7.07-2.122-2.121-1.415 1.415 2.122 2.121-7.071 7.071L0 15.556l7.071-7.07 2.121 2.12 1.414-1.414-2.12-2.12L15.555 0zM7.071 11.313l-4.243 4.242 2.828 2.829L9.9 14.14l-.707-.706-1.414 1.414-1.414-1.414 1.414-1.415-.707-.707zm8.486-8.485L11.314 7.07l.707.707 1.414-1.413 1.414 1.414-1.413 1.414.707.707 4.242-4.243-2.828-2.828z",
    fill: color
  }));
};

exports.LinkIcon = LinkIcon;
LinkIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
LinkIcon.defaultProps = {
  color: '#222',
  title: ''
};