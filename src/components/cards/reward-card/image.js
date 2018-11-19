"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardImage = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var RewardCardImageBase = function RewardCardImageBase(_ref) {
  var isDisabled = _ref.isDisabled,
      imageProps = _ref.imageProps;
  var imageStyles = [isDisabled && _rewardCard.styles.disabled];
  var shouldDisplayImage = imageProps && imageProps.src;
  if (!shouldDisplayImage) return null;
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement("div", {
    style: imageStyles,
    disabled: isDisabled
  }, _react.default.createElement("img", _extends({}, imageProps, {
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