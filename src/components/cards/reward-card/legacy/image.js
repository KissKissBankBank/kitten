"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deprecated = require("../../../../helpers/utils/deprecated");

var RewardCardImage = function RewardCardImage(_ref) {
  var isDisabled = _ref.isDisabled,
      imageProps = _ref.imageProps;
  var shouldDisplayImage = imageProps && imageProps.src;
  if (!shouldDisplayImage) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isDisabled ? 'k-LegacyRewardCard__element--disabled' : null
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
    alt: imageProps.alt || '',
    className: (0, _classnames.default)('k-LegacyRewardCard__image', imageProps.className)
  }))));
};

exports.RewardCardImage = RewardCardImage;
RewardCardImage.propTypes = {
  isDisabled: _propTypes.default.bool,
  imageProps: _propTypes.default.object
};
RewardCardImage.defaultProps = {
  isDisabled: false,
  imageProps: {}
};