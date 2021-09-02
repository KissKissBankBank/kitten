"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../../../components/atoms/typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var Title = function Title(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    color: "font1",
    weight: "regular",
    size: "tiny"
  }, props, {
    className: (0, _classnames.default)('k-RewardSummaryCard__title', className)
  }));
};

exports.Title = Title;