"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var _text = require("../../../../typography/text");

var _excluded = ["className", "textSize", "children", "truncateText"];

var Title = function Title(_ref) {
  var className = _ref.className,
      textSize = _ref.textSize,
      children = _ref.children,
      truncateText = _ref.truncateText,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-BackingCard__titleWrapper', 'k-BackingCard__drawer', {
      'k-BackingCard__titleWrapper--truncateText': truncateText
    })
  }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "h3",
    weight: "regular",
    className: (0, _classnames.default)('k-BackingCard__title', 'k-u-margin-none', 'k-u-align-center', className),
    size: textSize
  }, props), truncateText ? /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
    lines: 2
  }, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children)));
};

exports.Title = Title;
Title.defaultProps = {
  textSize: 'big',
  truncateText: true
};