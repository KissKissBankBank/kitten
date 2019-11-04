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
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && _react.default.createElement("title", null, title), _react.default.createElement("path", {
    d: "M8.586 10a2 2 0 0 0-2.829 0L2.93 12.828a2 2 0 0 0 0 2.829l1.414 1.414a2 2 0 0 0 2.829 0L10 14.243a2 2 0 0 0 0-2.829l-.707.707a1 1 0 0 1-1.414-1.414L8.586 10zM10 8.586l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a2 2 0 0 0 2.829 0l2.828-2.828a2 2 0 0 0 0-2.829L15.657 2.93a2 2 0 0 0-2.829 0L10 5.757a2 2 0 0 0 0 2.829zm2.578 3.992a3.99 3.99 0 0 1-1.164 3.079l-2.828 2.828a4 4 0 0 1-5.657 0l-1.414-1.414a4 4 0 0 1 0-5.657l2.828-2.828a3.99 3.99 0 0 1 3.079-1.164 3.99 3.99 0 0 1 1.164-3.079l2.828-2.828a4 4 0 0 1 5.657 0l1.414 1.414a4 4 0 0 1 0 5.657l-2.828 2.828a3.99 3.99 0 0 1-3.079 1.164z",
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