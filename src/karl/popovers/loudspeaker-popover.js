"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLoudspeakerPopover = void 0;

var _react = _interopRequireDefault(require("react"));

var _loudspeakerIllustration = require("kitten/components/illustrations/loudspeaker-illustration");

var _callToActionPopover = require("kitten/components/popovers/call-to-action-popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlLoudspeakerPopover = function KarlLoudspeakerPopover(props) {
  return _react.default.createElement(_callToActionPopover.CallToActionPopover, _extends({
    illustration: _loudspeakerIllustration.LoudspeakerIllustration
  }, props));
};

exports.KarlLoudspeakerPopover = KarlLoudspeakerPopover;