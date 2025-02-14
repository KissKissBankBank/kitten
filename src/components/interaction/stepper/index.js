"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StepperLink = exports.StepperItem = exports.Stepper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _text = require("../../typography/text");

var _stepperIcon = require("../../interaction/stepper-icon");

var _deprecated2 = require("./deprecated");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "sc-lfba75-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);

const List = _styledComponents.default.ul.withConfig({
  displayName: "stepper__List",
  componentId: "sc-lfba75-1"
})(["display:flex;align-items:center;justify-content:center;height:", ";flex-wrap:nowrap;box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;gap:", ";@media (min-width:", "){height:", ";gap:", ";}"], (0, _typography.pxToRem)(65), _colorsConfig.default.primary6, (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(50));

const ItemWrapper = _styledComponents.default.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "sc-lfba75-2"
})(["display:flex;align-items:center;.k-Stepper__icon{margin-right:", ";}", " ", ""], (0, _typography.pxToRem)(10), props => props.state === 'progress' && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.primary1), props => props.pointer && (0, _styledComponents.css)(["cursor:pointer;"]));

const StepperText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "sc-lfba75-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:var(--border-radius-s);"]);

const StepperItem = _ref => {
  let {
    children,
    state,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(ItemWrapper, (0, _extends2.default)({
    state: state
  }, props), /*#__PURE__*/_react.default.createElement(StepperText, {
    weight: "500",
    size: "small",
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIcon, {
    className: "k-Stepper__icon",
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

const StepperLink = _ref2 => {
  let {
    children,
    state,
    href,
    external,
    linkProps,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(ItemWrapper, (0, _extends2.default)({
    state: state
  }, props), /*#__PURE__*/_react.default.createElement(StepperText, (0, _extends2.default)({
    weight: "500",
    size: "small",
    tag: "a",
    className: (0, _classnames.default)('k-u-link', {
      'k-u-link-font1': state !== 'progress',
      'k-u-link-primary1': state === 'progress'
    }),
    href: href,
    target: external ? '_blank' : '_self',
    rel: external ? 'nofollow noopener noreferrer' : ''
  }, linkProps), /*#__PURE__*/_react.default.createElement(_stepperIcon.StepperIcon, {
    className: "k-Stepper__icon",
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

const Stepper = _ref3 => {
  let {
    children,
    items,
    ...others
  } = _ref3;

  if (!!items) {
    return /*#__PURE__*/_react.default.createElement(_deprecated2.Stepper, (0, _extends2.default)({
      items: items
    }, others));
  }

  return /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(List, others, children));
};

exports.Stepper = Stepper;
Stepper.propTypes = {
  items: (0, _deprecated.default)(_propTypes.default.array, 'Use subcomponents instead of items prop')
};
Stepper.Item = StepperItem;
Stepper.Link = StepperLink;