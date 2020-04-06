"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackerCard = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typography = require("../../helpers/utils/typography");

var _marger = require("../../components/layout/marger");

var _text = require("../../components/typography/text");

var _buttonImage = require("../../components/buttons/button-image");

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "backer-card__StyledCard",
  componentId: "zl7grf-0"
})(["padding:0 ", ";border:", " solid ", ";text-align:center;word-break:break-word;"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var StyledSubtitle = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "backer-card__StyledSubtitle",
  componentId: "zl7grf-1"
})(["display:block;"]);
var StyledButtonImage = (0, _styledComponents.default)(_buttonImage.ButtonImage).withConfig({
  displayName: "backer-card__StyledButtonImage",
  componentId: "zl7grf-2"
})(["margin:0 auto;"]);

var BackerCard = function BackerCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      imgProps = _ref.imgProps,
      description = _ref.description,
      others = (0, _objectWithoutProperties2.default)(_ref, ["title", "subtitle", "imgProps", "description"]);
  return /*#__PURE__*/_react.default.createElement(StyledCard, others, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "4",
    bottom: "1"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    weight: "regular",
    lineHeight: "normal",
    size: "tiny"
  }, title, subtitle && /*#__PURE__*/_react.default.createElement(StyledSubtitle, {
    color: "font1",
    weight: "light",
    size: "micro"
  }, subtitle))), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "1",
    bottom: "1"
  }, /*#__PURE__*/_react.default.createElement(StyledButtonImage, {
    tag: "span",
    img: imgProps,
    withoutPointerEvents: true,
    huge: true
  })), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "1",
    bottom: "4"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "p",
    color: "font1",
    weight: "light",
    size: "micro",
    lineHeight: "normal",
    className: "k-u-margin-none"
  }, description)));
};

exports.BackerCard = BackerCard;
BackerCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  subtitle: _propTypes.default.string,
  imgProps: _propTypes.default.object.isRequired,
  description: _propTypes.default.node.isRequired
};
BackerCard.defaultProps = {
  subtitle: null
};