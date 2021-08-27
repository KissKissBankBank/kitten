"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = exports.StepperLink = exports.StepperItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _text = require("../../../components/atoms/typography/text");

var _stepperIcon = require("../../../components/atoms/stepper-icon");

var _deprecated2 = require("./deprecated");

var _excluded = ["children", "state"],
    _excluded2 = ["children", "state", "href", "external", "linkProps"],
    _excluded3 = ["children", "items"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "kuopc1-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);

var List = _styledComponents.default.ul.withConfig({
  displayName: "stepper__List",
  componentId: "kuopc1-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;height:", ";box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;@media (max-width:", "){height:", ";}"], (0, _typography.pxToRem)(80), _colorsConfig.default.primary6, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.max), (0, _typography.pxToRem)(65));

var ItemWrapper = _styledComponents.default.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "kuopc1-2"
})(["display:flex;align-items:center;gap:", ";@media (min-width:", "){gap:", ";}.k-Stepper__icon{margin-right:", ";}", " ", ""], (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(10), function (props) {
  return props.state === 'progress' && (0, _styledComponents.css)(["color:", ";"], _colorsConfig.default.primary1);
}, function (props) {
  return props.pointer && (0, _styledComponents.css)(["cursor:pointer;"]);
});

var StepperText = (0, _styledComponents.default)(_text.Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "kuopc1-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:", ";&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}"], (0, _typography.pxToRem)(6), _colorsConfig.default.primary3, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4);

var StepperItem = function StepperItem(_ref) {
  var children = _ref.children,
      state = _ref.state,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(ItemWrapper, (0, _extends2.default)({
    state: state
  }, props), /*#__PURE__*/_react.default.createElement(StepperText, {
    weight: "regular",
    size: "tiny",
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

var StepperLink = function StepperLink(_ref2) {
  var children = _ref2.children,
      state = _ref2.state,
      href = _ref2.href,
      external = _ref2.external,
      linkProps = _ref2.linkProps,
      props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
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

var Stepper = function Stepper(_ref3) {
  var children = _ref3.children,
      items = _ref3.items,
      others = (0, _objectWithoutProperties2.default)(_ref3, _excluded3);

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