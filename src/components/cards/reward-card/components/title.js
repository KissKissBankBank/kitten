"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardTitle = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../components/typography/text");

var _horizontalStroke = require("../../../../components/layout/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var RewardCardTitle = function RewardCardTitle(_ref) {
  var children = _ref.children,
      tagName = _ref.tagName,
      disabled = _ref.disabled,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "tagName", "disabled", "className"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({}, props, {
    fontStyle: "italic",
    weight: "bold",
    tag: tagName,
    color: "font1",
    className: (0, _classnames.default)('k-RewardCard__title', className, {
      'k-RewardCard__title--disabled': disabled
    })
  }), children), /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "default",
    className: "k-u-margin-bottom-triple",
    color: disabled ? _colorsConfig.default.font2 : null
  }));
};

exports.RewardCardTitle = RewardCardTitle;
RewardCardTitle.propTypes = {
  children: _propTypes.default.string,
  tagName: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
RewardCardTitle.defaultProps = {
  children: '',
  tagName: 'h6',
  disabled: false
};