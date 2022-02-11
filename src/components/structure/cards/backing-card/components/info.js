"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Info = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

var _excluded = ["className", "legend", "value", "fullWidth"];

var Info = function Info(_ref) {
  var className = _ref.className,
      legend = _ref.legend,
      value = _ref.value,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  console.warn('This subcomponent is deprecated. Please use another one.');
  return /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
    className: (0, _classnames.default)('k-BackingCard__info', 'k-u-size-tiny', 'k-u-line-height-normal', className, {
      'k-BackingCard__halfDrawer': !fullWidth,
      'k-BackingCard__drawer': fullWidth
    })
  }, props), /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-BackingCard__info__legend",
    weight: "regular",
    size: "tiny",
    lineHeight: "normal"
  }, legend), ' ', /*#__PURE__*/_react.default.createElement(_text.Text, {
    className: "k-BackingCard__info__value",
    weight: "light",
    size: "tiny",
    lineHeight: "normal"
  }, value));
};

exports.Info = Info;