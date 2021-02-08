"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../typography/text");

var _horizontalStroke = require("../../../layout/horizontal-stroke");

var Title = function Title(_ref) {
  var className = _ref.className,
      textSize = _ref.textSize,
      strokeSize = _ref.strokeSize,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "textSize", "strokeSize"]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-BackingCard__titleWrapper', 'k-BackingCard__drawer')
  }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "h3",
    weight: "bold",
    lineHeight: "1"
  }, props, {
    size: textSize,
    className: (0, _classnames.default)('k-BackingCard__title', 'k-u-margin-none', className)
  })), !!strokeSize && /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: strokeSize,
    className: "k-u-margin-top-singleHalf k-u-margin-bottom-single"
  }));
};

exports.Title = Title;
Title.defaultProps = {
  textSize: 'default',
  strokeSize: null
};