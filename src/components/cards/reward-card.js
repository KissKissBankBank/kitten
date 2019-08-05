"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.RewardCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _legacyRewardCardContainer = require("../../components/cards/reward-card/legacy-reward-card-container");

var _text = require("../../components/typography/text");

var _typography = require("../../helpers/utils/typography");

var _title = require("../../components/cards/reward-card/title");

var _row = require("../../components/cards/reward-card/row");

var _rowContent = require("../../components/cards/reward-card/row-content");

var _rowSide = require("../../components/cards/reward-card/row-side");

var _starredBadge = require("../../components/cards/reward-card/starred-badge");

var _checkedSection = require("../../components/cards/reward-card/checked-section");

var Infos = (0, _styledComponents.default)(function (_ref) {
  var withMarginBottom = _ref.withMarginBottom,
      props = (0, _objectWithoutProperties2.default)(_ref, ["withMarginBottom"]);
  return _react.default.createElement(_text.Text, props);
}).withConfig({
  displayName: "reward-card__Infos",
  componentId: "sc-1vkpp2h-0"
})(["display:block;line-height:", ";", " ", ""], (0, _typography.pxToRem)(20), function (_ref2) {
  var withMarginBottom = _ref2.withMarginBottom;
  return withMarginBottom && (0, _styledComponents.css)(["margin-bottom:", ";"], (0, _typography.pxToRem)(10));
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && (0, _styledComponents.css)(["color:", ";cursor:not-allowed;"], _colorsConfig.default.font2);
});

var RewardImage = _styledComponents.default.img.withConfig({
  displayName: "reward-card__RewardImage",
  componentId: "sc-1vkpp2h-1"
})(["width:100%;", ""], function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && (0, _styledComponents.css)(["filter:grayscale(1) opacity(0.4);cursor:not-allowed;"]);
});

var CardContainer = (0, _styledComponents.default)(function (_ref5) {
  var withoutBorder = _ref5.withoutBorder,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["withoutBorder"]);
  return _react.default.createElement("div", props);
}).withConfig({
  displayName: "reward-card__CardContainer",
  componentId: "sc-1vkpp2h-2"
})(["background-color:", ";width:100%;padding:", " 0;box-sizing:border-box;", ""], _colorsConfig.default.background1, (0, _typography.pxToRem)(15), function (_ref6) {
  var withoutBorder = _ref6.withoutBorder;
  return !withoutBorder && (0, _styledComponents.css)(["border:", " solid ", ";"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1);
}); // TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.

var RewardCardInfo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardInfo, _Component);

  function RewardCardInfo() {
    (0, _classCallCheck2.default)(this, RewardCardInfo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardInfo).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          withMarginBottom = _this$props.withMarginBottom,
          disabled = _this$props.disabled;
      return _react.default.createElement(Infos, {
        size: "tiny",
        color: "font1",
        weight: "regular",
        withMarginBottom: withMarginBottom,
        disabled: disabled
      }, "".concat(label, " "), _react.default.createElement(_text.Text, {
        weight: "light"
      }, value));
    }
  }]);
  return RewardCardInfo;
}(_react.Component); // TODO: Move this class to a separate file after deprecated component with the
// same name will be deleted.


RewardCardInfo.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  withMarginBottom: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RewardCardInfo.defaultProps = {
  value: null,
  withMarginBottom: true,
  disabled: false
};

var RewardCardImage =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(RewardCardImage, _Component2);

  function RewardCardImage() {
    (0, _classCallCheck2.default)(this, RewardCardImage);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardImage).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardImage, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alt = _this$props2.alt,
          disabled = _this$props2.disabled,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["alt", "disabled"]);
      return _react.default.createElement(RewardImage, (0, _extends2.default)({}, others, {
        alt: alt || '',
        disabled: disabled
      }));
    }
  }]);
  return RewardCardImage;
}(_react.Component);

RewardCardImage.propTypes = {
  disabled: _propTypes.default.bool
};
RewardCardImage.defaultProps = {
  disabled: false
};

var RewardCard =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(RewardCard, _Component3);

  function RewardCard() {
    (0, _classCallCheck2.default)(this, RewardCard);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCard).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCard, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          withoutBorder = _this$props3.withoutBorder,
          others = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "withoutBorder"]);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_legacyRewardCardContainer.LegacyRewardCardContainer, this.props), children && _react.default.createElement(CardContainer, (0, _extends2.default)({
        withoutBorder: withoutBorder
      }, others), children));
    }
  }]);
  return RewardCard;
}(_react.Component); // This export handles retro-compatibility.
// TODO: remove this export when deleting all deprecated components.


exports.RewardCard = RewardCard;
RewardCard.Row = _row.RewardCardRow;
RewardCard.RowContent = _rowContent.RewardCardRowContent;
RewardCard.RowSide = _rowSide.RewardCardRowSide;
RewardCard.Title = _title.RewardCardTitle;
RewardCard.Image = RewardCardImage;
RewardCard.Info = RewardCardInfo;
RewardCard.CheckedSection = _checkedSection.RewardCardCheckedSection;
RewardCard.StarredBadge = _starredBadge.RewardCardStarredBadge;
RewardCard.propTypes = {
  titleAmount: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Title` instead.'),
  titleTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Title` instead.'),
  subtitle: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  subtitleTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  description: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  manageContributionDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  manageContributionLinkLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  manageContributionLinkHref: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  buttonLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnMouseEnter: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnMouseLeave: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  buttonOnClick: (0, _deprecated.default)(_propTypes.default.func, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  imageProps: (0, _deprecated.default)(_propTypes.default.object, 'Use `RewardCard.Image` instead.'),
  isDisabled: (0, _deprecated.default)(_propTypes.default.bool, 'You should handle the disabled state direcly on your component.'),
  starred: (0, _deprecated.default)(_propTypes.default.bool, 'Use `RewardCard` sub-component instead.'),
  starLabel: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard` sub-component instead.'),
  version: (0, _deprecated.default)(_propTypes.default.oneOf(['default', 'tiny']), '`RewardCard` is no longer handled with media-queries. The version of the component now is handled by the size of the parent container.'),
  // Deprecated props
  titleDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  textDescription: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  textTag: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Row`, `RewardCard.RowContent` and `RewardCard.RowSide` to compose your card content instead.'),
  myContribution: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionDescription` prop instead.'),
  manageContribution: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionLinkLabel` prop instead.'),
  manageContributionLink: (0, _deprecated.default)(_propTypes.default.string, 'Use `manageContributionLinkHref` prop instead.'),
  button: (0, _deprecated.default)(_propTypes.default.string, 'Use `RewardCard.Action` to insert your button and its callbacks instead.'),
  titleContributors: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  titleDelivery: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  titleAvailability: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueContributors: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueDelivery: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  valueAvailability: (0, _deprecated.default)(_propTypes.default.string, 'Use `Reward.Info` to compose your card content now.'),
  withoutBorder: _propTypes.default.bool
};
RewardCard.defaultProps = {
  withoutBorder: false
};
var styles = _legacyRewardCardContainer.styles;
exports.styles = styles;