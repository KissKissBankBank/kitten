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

var _classnames = _interopRequireDefault(require("classnames"));

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
  return /*#__PURE__*/_react.default.createElement(_styles.StyledRewardCard, (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-RewardCard', others.className, {
      'k-rewardCard--withoutBorder': withoutBorder,
      'k-RewardCard--isDisabled': disabled
    })
  }), children);
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
  withoutBorder: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RewardCard.defaultProps = {
  withoutBorder: false,
  disabled: false
};