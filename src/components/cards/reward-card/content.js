"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rewardCard = require("../../../components/cards/reward-card");

var _marger = require("../../../components/layout/marger");

var _title = require("../../../components/typography/title");

var _button = require("../../../components/buttons/button");

var _horizontalStroke = require("../../../components/layout/horizontal-stroke");

var _paragraph = require("../../../components/typography/paragraph");

var _text = require("../../../components/typography/text");

var _starIcon = require("../../../components/icons/star-icon");

var _deprecated = require("../../../helpers/utils/deprecated");

var RewardCardContentBase = function RewardCardContentBase(_ref) {
  var titleAmount = _ref.titleAmount,
      titleTag = _ref.titleTag,
      subtitle = _ref.subtitle,
      subtitleTag = _ref.subtitleTag,
      description = _ref.description,
      starred = _ref.starred,
      starLabel = _ref.starLabel,
      isDisabled = _ref.isDisabled,
      isTinyVersion = _ref.isTinyVersion;
  var descriptionStyle = [isDisabled && _rewardCard.styles.disabled];
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: descriptionStyle,
    disabled: isDisabled
  }, starred && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    bottom: "2"
  }, /*#__PURE__*/_react.default.createElement(_button.Button, {
    icon: true,
    readonly: true,
    tag: "span",
    size: "tiny",
    modifier: "lithium",
    style: {
      borderRadius: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_starIcon.StarIcon, {
    className: "k-Button__icon is-readonly"
  }), starLabel)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: starred ? 2 : 0,
    bottom: "2"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: isTinyVersion ? 'quaternary' : 'tertiary',
    italic: true,
    margin: false,
    tag: titleTag,
    style: _rewardCard.styles.textColor
  }, titleAmount)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "big"
  })), subtitle && /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "1"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    size: isTinyVersion ? 'big' : 'huge',
    tag: subtitleTag,
    weight: "bold",
    style: _rewardCard.styles.textMargin
  }, subtitle)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: !subtitle ? 3 : 1
  }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
    style: _rewardCard.styles.textColor,
    modifier: isTinyVersion ? 'quaternary' : 'tertiary',
    margin: false
  }, description))));
};

RewardCardContentBase.propTypes = {
  titleAmount: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  subtitle: _propTypes.default.string,
  subtitleTag: _propTypes.default.string,
  description: _propTypes.default.string,
  starred: _propTypes.default.bool,
  starLabel: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  isTinyVersion: _propTypes.default.bool.isRequired
};
RewardCardContentBase.defaultProps = {
  titleTag: 'h1',
  subtitle: '',
  subtitleTag: 'p',
  description: '',
  starred: false,
  starLabel: '',
  isDisabled: false
};
var RewardCardContent = (0, _radium.default)(RewardCardContentBase);
exports.RewardCardContent = RewardCardContent;