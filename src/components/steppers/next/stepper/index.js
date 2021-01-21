"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = exports.StepperLink = exports.StepperItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../typography/text");

var _stepperIcon = require("../../../../components/steppers/stepper-icon");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "sc-1c0a5ko-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);

var List = _styledComponents.default.ul.withConfig({
  displayName: "stepper__List",
  componentId: "sc-1c0a5ko-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;height:", ";box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;@media (max-width:", "){height:", ";}"], (0, _typography.pxToRem)(80), _colorsConfig.default.primary6, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(65));

var ItemWrapper = _styledComponents.default.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "sc-1c0a5ko-2"
})(["display:flex;align-items:center;:not(:last-child){padding-right:", ";}@media (max-width:", "){:not(:last-child){padding-right:", ";}}", " ", ""], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(25), function (props) {
  return props.state === 'progress' && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.primary1);
}, function (props) {
  return props.pointer && (0, _styledComponents.css)(["cursor:pointer;"]);
});

var StepperText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "sc-1c0a5ko-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:", ";&:focus{outline:", " solid ", ";outline-offset:", ";}"], (0, _typography.pxToRem)(6), _colorsConfig.default.primary3, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2));

var StepperIcon = function StepperIcon(_ref) {
  var state = _ref.state;

  switch (state) {
    case 'progress':
      return /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIconInProgress, null);

    case 'validated':
      return /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIconValidated, null);

    default:
      return /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIconDefault, null);
  }
};

var StepperItem = function StepperItem(_ref2) {
  var children = _ref2.children,
      state = _ref2.state,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "state"]);
  return /*#__PURE__*/_react.default.createElement(ItemWrapper, (0, _extends2.default)({
    state: state
  }, props), /*#__PURE__*/_react.default.createElement(StepperText, {
    weight: "regular",
    size: "tiny",
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement(StepperIcon, {
    state: state
  }), children));
};

exports.StepperItem = StepperItem;
StepperItem.propTypes = {
  state: _propTypes.default.oneOf(['default', 'progress', 'validated']),
  pointer: _propTypes.default.bool
};
StepperItem.defaultProps = {
  state: 'default',
  pointer: false
};

var StepperLink = function StepperLink(_ref3) {
  var children = _ref3.children,
      state = _ref3.state,
      href = _ref3.href,
      external = _ref3.external,
      linkProps = _ref3.linkProps,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children", "state", "href", "external", "linkProps"]);
  return /*#__PURE__*/_react.default.createElement(ItemWrapper, (0, _extends2.default)({
    state: state
  }, props), /*#__PURE__*/_react.default.createElement(StepperText, (0, _extends2.default)({
    weight: "regular",
    size: "tiny",
    tag: "a",
    className: (0, _classnames.default)('k-u-link', {
      'k-u-link-font1': state !== 'progress',
      'k-u-link-primary1': state === 'progress'
    }),
    href: href,
    target: external ? '_blank' : '_self',
    rel: external ? 'nofollow noopener noreferrer' : ''
  }, linkProps), /*#__PURE__*/_react.default.createElement(StepperIcon, {
    state: state
  }), children));
};

exports.StepperLink = StepperLink;
StepperLink.propTypes = {
  href: _propTypes.default.string.isRequired,
  state: _propTypes.default.oneOf(['default', 'progress', 'validated']),
  external: _propTypes.default.bool,
  linkProps: _propTypes.default.object
};
StepperLink.defaultProps = {
  state: 'default',
  external: false,
  linkProps: {}
};

var Stepper = function Stepper(_ref4) {
  var children = _ref4.children,
      others = (0, _objectWithoutProperties2.default)(_ref4, ["children"]);
  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(List, others, children));
};

exports.Stepper = Stepper;
Stepper.propTypes = {};
Stepper.Item = StepperItem;
Stepper.Link = StepperLink;