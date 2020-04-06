"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkedCircleIconAsString = exports.CheckedCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var CheckedCircleIcon = function CheckedCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      checkedColor = _ref.checkedColor,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["circleColor", "checkedColor", "title"]);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("circle", {
    fill: circleColor,
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: checkedColor,
    d: "M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z"
  }));
};

exports.CheckedCircleIcon = CheckedCircleIcon;
CheckedCircleIcon.defaultProps = {
  circleColor: '#fff',
  checkedColor: '#333',
  title: 'Checked circle'
};

var checkedCircleIconAsString = function checkedCircleIconAsString(_ref2) {
  var circleColor = _ref2.circleColor,
      checkedColor = _ref2.checkedColor;
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle fill=\"".concat(circleColor, "\" cx=\"10\" cy=\"10\" r=\"10\" /><path fill=\"").concat(checkedColor, "\" d=\"M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z\"/></svg>");
};

exports.checkedCircleIconAsString = checkedCircleIconAsString;