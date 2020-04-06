"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rewardCard = require("../../../components/cards/reward-card");

var _deprecated = require("../../../helpers/utils/deprecated");

var RewardCardImageBase = function RewardCardImageBase(_ref) {
  var isDisabled = _ref.isDisabled,
      imageProps = _ref.imageProps;
  var imageStyles = [isDisabled && _rewardCard.styles.disabled];
  var shouldDisplayImage = imageProps && imageProps.src;
  if (!shouldDisplayImage) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: imageStyles,
    disabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
    alt: imageProps.alt || '',
    style: _rewardCard.styles.image
  }))));
};

RewardCardImageBase.propTypes = {
  isDisabled: _propTypes.default.bool,
  imageProps: _propTypes.default.object
};
RewardCardImageBase.defaultProps = {
  isDisabled: false,
  imageProps: {}
};
var RewardCardImage = (0, _radium.default)(RewardCardImageBase);
exports.RewardCardImage = RewardCardImage;