"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkedCircleIconAsString = exports.CheckedCircleIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _ratio = require("../../../helpers/utils/ratio");

var DEFAULT_WIDTH = 20;
var DEFAULT_HEIGHT = 20;

var CheckedCircleIcon = function CheckedCircleIcon(_ref) {
  var circleColor = _ref.circleColor,
      checkedColor = _ref.checkedColor,
      title = _ref.title,
      width = _ref.width,
      height = _ref.height,
      props = (0, _objectWithoutProperties2.default)(_ref, ["circleColor", "checkedColor", "title", "width", "height"]);
  var computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width: width,
    height: height
  });
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    width: computed.width,
    height: computed.height
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
CheckedCircleIcon.prototype = {
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
CheckedCircleIcon.defaultProps = {
  circleColor: _colorsConfig.default.background1,
  checkedColor: _colorsConfig.default.font1
};

var checkedCircleIconAsString = function checkedCircleIconAsString(_ref2) {
  var circleColor = _ref2.circleColor,
      checkedColor = _ref2.checkedColor;
  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><circle fill=\"".concat(circleColor, "\" cx=\"10\" cy=\"10\" r=\"10\" /><path fill=\"").concat(checkedColor, "\" d=\"M8.232 13.89l.707.706 5.656-5.657-1.414-1.415-4.243 4.243-2.122-2.122-1.414 1.415 2.828 2.83z\"/></svg>");
};

exports.checkedCircleIconAsString = checkedCircleIconAsString;