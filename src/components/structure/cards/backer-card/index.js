"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BackerCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _text = require("../../../typography/text");

var _buttonImage = require("../../../action/button-image");

var _excluded = ["className", "title", "titleTag", "subtitle", "imgProps", "description"];

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "backer-card__StyledCard",
  componentId: "sc-8cf6gi-0"
})(["padding:", " ", ";border-radius:var(--border-radius-s);box-shadow:var(--box-shadow-s);text-align:center;word-break:break-word;display:flex;align-items:center;flex-direction:column;gap:", ";"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(10));

var BackerCard = function BackerCard(_ref) {
  var className = _ref.className,
      title = _ref.title,
      titleTag = _ref.titleTag,
      subtitle = _ref.subtitle,
      imgProps = _ref.imgProps,
      description = _ref.description,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledCard, (0, _extends2.default)({
    className: (0, _classnames.default)('k-BackerCard', className)
  }, others), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: titleTag || 'div',
    color: "font1",
    weight: "500",
    lineHeight: "normal",
    size: "small"
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "div",
    color: "font1",
    weight: "400",
    size: "micro"
  }, subtitle)), /*#__PURE__*/_react.default.createElement(_buttonImage.ButtonImage, {
    tag: "span",
    img: imgProps,
    withoutPointerEvents: true,
    huge: true
  }), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    color: "font1",
    weight: "400",
    size: "micro",
    lineHeight: "normal",
    className: "k-u-margin-none"
  }, description));
};

exports.BackerCard = BackerCard;
BackerCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string,
  imgProps: _propTypes.default.object.isRequired,
  description: _propTypes.default.node.isRequired,
  titleTag: _propTypes.default.string
};
BackerCard.defaultProps = {
  subtitle: null,
  titleTag: 'div'
};