"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlAutoTriggerCallToActionPopover = void 0;

var _react = _interopRequireDefault(require("react"));

var _triggerEnhancer = require("kitten/hoc/trigger-enhancer");

var _phoneIllustration = require("kitten/components/illustrations/phone-illustration");

var _callToActionPopover = require("kitten/components/popovers/call-to-action-popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'I could pee on this if I had the energy. Present belly, scratch ' + 'hand when stroked find something else more interesting. Chase ball' + 'of string. Stare at ceiling light why must they do that, for chase' + 'laser chase imaginary bugs.';
var KarlAutoTriggerCallToActionPopover = (0, _triggerEnhancer.triggerEnhancer)(_callToActionPopover.CallToActionPopover, {
  title: 'Kitty kitty kitty',
  text: text,
  illustration: _phoneIllustration.PhoneIllustration,
  popoverClassName: 'karl-AutoTriggerCallToActionPopover',
  buttons: [{
    label: 'Check this out!',
    modifier: 'helium',
    tag: 'a',
    clickOptions: {
      closeOnClick: true
    }
  }]
});
exports.KarlAutoTriggerCallToActionPopover = KarlAutoTriggerCallToActionPopover;