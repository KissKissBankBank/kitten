"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardVideo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gifVideo = require("../../../../components/videos/gif-video");

var RewardCardVideo = function RewardCardVideo(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      others = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled"]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-RewardCard__figureWrapper"
  }, /*#__PURE__*/_react.default.createElement(_gifVideo.GifVideo, (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-RewardCard__video', className, {
      'k-RewardCard__image--disabled': disabled
    })
  })));
};

exports.RewardCardVideo = RewardCardVideo;
RewardCardVideo.propTypes = {
  disabled: _propTypes.default.bool
};
RewardCardVideo.defaultProps = {
  disabled: false
};