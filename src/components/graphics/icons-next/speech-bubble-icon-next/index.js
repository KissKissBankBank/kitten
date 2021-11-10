"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpeechBubbleIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SpeechBubbleIconNext = function SpeechBubbleIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["color", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.203 12.397a1.2 1.2 0 1 0 0-2.399 1.2 1.2 0 0 0 0 2.4Zm9.598 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm-4.799 0a1.2 1.2 0 1 0 0-2.399 1.2 1.2 0 0 0 0 2.4Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.002 0C5.388 0 .005 5.023.005 11.198a10.65 10.65 0 0 0 2.032 6.222c-.3.711-.666 1.393-1.092 2.036l-.536.8a2.4 2.4 0 0 0 1.995 3.74 10.27 10.27 0 0 0 6.191-2.064 12.7 12.7 0 0 0 3.407.463C18.617 22.395 24 17.372 24 11.198 24 5.023 18.617 0 12.002 0Zm0 19.996c-1.35 0-2.687-.264-3.935-.78a7.947 7.947 0 0 1-5.663 2.38l.536-.8a15.42 15.42 0 0 0 1.824-3.828 8.346 8.346 0 0 1-2.36-5.77c0-4.86 4.3-8.798 9.598-8.798 5.3 0 9.598 3.939 9.598 8.798s-4.299 8.798-9.598 8.798Z",
    fill: color
  }));
};

exports.SpeechBubbleIconNext = SpeechBubbleIconNext;
SpeechBubbleIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
SpeechBubbleIconNext.defaultProps = {
  color: '#222',
  title: null
};