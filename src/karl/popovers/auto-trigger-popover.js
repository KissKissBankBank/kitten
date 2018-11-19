"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlAutoTriggerPopover = void 0;

var _react = _interopRequireDefault(require("react"));

var _triggerEnhancer = require("kitten/hoc/trigger-enhancer");

var _popover = require("kitten/components/popovers/popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var text = 'I could pee on this if i had the energy. Present belly, scratch ' + 'hand when stroked find something else more interesting. Chase ball' + 'of string. Stare at ceiling light why must they do that, for chase' + 'laser chase imaginary bugs.';
var KarlAutoTriggerPopover = (0, _triggerEnhancer.triggerEnhancer)(_popover.Popover, {
  children: text,
  popoverClassName: 'karl-AutoTriggerPopover',
  titleAriaLabelId: 'dialogtitle-auto-trigger-popover'
});
exports.KarlAutoTriggerPopover = KarlAutoTriggerPopover;