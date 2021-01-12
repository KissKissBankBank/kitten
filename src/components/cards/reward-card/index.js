"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rewardCardContainer = require("./legacy/reward-card-container");

var _styles = require("./styles");

var _info = require("./components/info");

var _image = require("./components/image");

var _video = require("./components/video");

var _title = require("./components/title");

var _row = require("./components/row");

var _rowContent = require("./components/row-content");

var _rowSide = require("./components/row-side");

var _starredBadge = require("./components/starred-badge");

var _diamondBadge = require("./components/diamond-badge");

var _checkedSection = require("./components/checked-section");

var RewardCard = function RewardCard(_ref) {
  var children = _ref.children,
      withoutBorder = _ref.withoutBorder,
      disabled = _ref.disabled,
      others = (0, _objectWithoutProperties2.default)(_ref, ["children", "withoutBorder", "disabled"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children ? /*#__PURE__*/_react.default.createElement(_styles.StyledRewardCard, (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-RewardCard', others.className, {
      'k-rewardCard--withoutBorder': withoutBorder,
      'k-RewardCard--isDisabled': disabled
    })
  }), children) : /*#__PURE__*/_react.default.createElement(_rewardCardContainer.LegacyRewardCardContainer, (0, _extends2.default)({
    withoutBorder: withoutBorder,
    disabled: disabled
  }, others)));
};

exports.RewardCard = RewardCard;
RewardCard.Row = _row.RewardCardRow;
RewardCard.RowContent = _rowContent.RewardCardRowContent;
RewardCard.RowSide = _rowSide.RewardCardRowSide;
RewardCard.Title = _title.RewardCardTitle;
RewardCard.Image = _image.RewardCardImage;
RewardCard.Video = _video.RewardCardVideo;
RewardCard.Info = _info.RewardCardInfo;
RewardCard.CheckedSection = _checkedSection.RewardCardCheckedSection;
RewardCard.StarredBadge = _starredBadge.RewardCardStarredBadge;
RewardCard.DiamondBadge = _diamondBadge.RewardCardDiamondBadge;
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
  withoutBorder: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RewardCard.defaultProps = {
  withoutBorder: false,
  disabled: false
};