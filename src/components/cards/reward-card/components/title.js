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

var _titleWithStroke = require("../../../../components/typography/title-with-stroke");

var RewardCardTitle = function RewardCardTitle(_ref) {
  var children = _ref.children,
      tagName = _ref.tagName,
      disabled = _ref.disabled,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "tagName", "disabled", "className"]);
  return /*#__PURE__*/_react.default.createElement(_titleWithStroke.TitleWithStroke, (0, _extends2.default)({}, props, {
    italic: true,
    margin: false,
    tag: tagName,
    modifier: "senary",
    className: (0, _classnames.default)('k-RewardCard__title', className, {
      'k-RewardCard__title--disabled': disabled
    }, 'k-u-color-font1')
  }), children);
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