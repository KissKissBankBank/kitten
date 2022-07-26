"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../typography/text");

const Title = _ref => {
  let {
    className,
    textSize,
    truncateText,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-RewardCard__titleWrapper', 'k-RewardCard__drawer', {
      'k-RewardCard__titleWrapper--truncateText': truncateText
    })
  }, /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "h3",
    weight: "500",
    className: (0, _classnames.default)('k-RewardCard__title', 'k-u-margin-none', 'k-u-align-center', className, {
      'k-u-clamp': truncateText
    }),
    size: textSize,
    style: {
      '--line-clamp': 2,
      ...style
    }
  }, props)));
};

exports.Title = Title;
Title.defaultProps = {
  textSize: 'large',
  truncateText: true
};