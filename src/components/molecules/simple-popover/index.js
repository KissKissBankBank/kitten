"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimplePopover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _marger = require("../../../components/layout/marger");

var _crossIcon = require("../../../components/graphics/icons/cross-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _title = require("../../../components/atoms/typography/title");

var _next = require("../../../components/atoms/typography/paragraph/next");

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _button = require("../../../components/molecules/buttons/button");

var borderSize = 2;

var PopoverContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-popover__PopoverContainer",
  componentId: "g4kqoa-0"
})(["padding:", ";display:flex;align-items:center;position:relative;border:solid ", " ", ";box-sizing:border-box;max-width:", ";flex-basis:100%;margin-bottom:", ";background-color:", ";opacity:1;visibility:visible;transition:opacity 0.3s ease,visibility 0s ease;transition-delay:0s,0s;@media (min-width:", "){padding:", " ", ";}&[aria-hidden='true']{opacity:0;visibility:hidden;transition-delay:0s,0.3s;}"], (0, _typography.pxToRem)(40), _colorsConfig.default.line1, (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(555), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(40));

var IconContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-popover__IconContainer",
  componentId: "g4kqoa-1"
})(["display:none;min-width:", ";min-height:", ";margin-right:", ";border-radius:100%;align-items:center;justify-content:center;background-color:", ";@media (min-width:", "px){display:flex;}"], (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(40), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, _screenConfig.ScreenConfig.S.min);

var CrossIconButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "simple-popover__CrossIconButton",
  componentId: "g4kqoa-2"
})(["position:absolute;top:-", ";right:-", ";transition:background-color 0.2s,color 0.2s,border-color 0.2s;"], (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize));
var ButtonsContainer = (0, _styledComponents.default)(_marger.Marger).withConfig({
  displayName: "simple-popover__ButtonsContainer",
  componentId: "g4kqoa-3"
})(["& > * + *{margin-top:", ";@media (min-width:", "px){margin-top:0;margin-left:", ";}}"], (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(20));

var SimplePopover = function SimplePopover(_ref2) {
  var isVisible = _ref2.isVisible,
      onCloseClick = _ref2.onCloseClick,
      titleId = _ref2.titleId,
      closeButtonLabel = _ref2.closeButtonLabel,
      title = _ref2.title,
      text = _ref2.text,
      illustration = _ref2.illustration,
      illustrationBackground = _ref2.illustrationBackground,
      buttons = _ref2.buttons,
      simplePopoverProps = (0, _objectWithoutProperties2.default)(_ref2, ["isVisible", "onCloseClick", "titleId", "closeButtonLabel", "title", "text", "illustration", "illustrationBackground", "buttons"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDisplayedInDOM = _useState2[0],
      displayInDom = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAriaVisible = _useState4[0],
      setAriaVisible = _useState4[1];

  var delayAfterMount = null;
  (0, _react.useEffect)(function () {
    if (isVisible) {
      displayInDom(true);
      delayAfterMount = window.setTimeout(function () {
        return setAriaVisible(true);
      }, 50);
    } else {
      setAriaVisible(false);
      delayAfterMount = window.setTimeout(function () {
        return displayInDom(false);
      }, 300);
    }

    return function () {
      window.clearTimeout(delayAfterMount);
    };
  }, [isVisible]);
  if (!isDisplayedInDOM) return null;
  return /*#__PURE__*/_react.default.createElement(PopoverContainer, (0, _extends2.default)({}, simplePopoverProps, {
    role: "dialog",
    "aria-hidden": !isAriaVisible,
    "aria-labelledby": titleId
  }), /*#__PURE__*/_react.default.createElement(CrossIconButton, {
    "aria-label": closeButtonLabel,
    onClick: onCloseClick,
    type: "button",
    modifier: "hydrogen",
    size: "micro",
    icon: true
  }, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    "aria-hidden": true,
    width: "8",
    height: "8",
    fill: _colorsConfig.default.background1
  })), illustration && /*#__PURE__*/_react.default.createElement(IconContainer, {
    backgroundColor: illustrationBackground
  }, illustration), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    bottom: ".5"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, {
    id: titleId,
    modifier: "senary",
    noMargin: true,
    tag: "h2"
  }, title)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: ".5",
    bottom: "1"
  }, /*#__PURE__*/_react.default.createElement(_next.Paragraph, {
    modifier: "tertiary"
  }, text)), buttons.length > 0 && /*#__PURE__*/_react.default.createElement(ButtonsContainer, {
    top: "3"
  }, buttons.map(function (_ref3, i) {
    var label = _ref3.label,
        clickOptions = _ref3.clickOptions,
        buttonProps = (0, _objectWithoutProperties2.default)(_ref3, ["label", "clickOptions"]);
    var clickHandler = clickOptions && clickOptions.closeOnClick && onCloseClick;
    return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
      onClick: clickHandler,
      key: i,
      children: label
    }, buttonProps));
  }))));
};

exports.SimplePopover = SimplePopover;
SimplePopover.defaultProps = {
  isVisible: true,
  onCloseClick: function onCloseClick() {},
  titleId: 'popover-title',
  closeButtonLabel: 'Close',
  title: '',
  text: '',
  illustration: null,
  illustrationBackground: _colorsConfig.default.primary4,
  buttons: []
};
SimplePopover.propTypes = {
  isVisible: _propTypes.default.bool,
  onCloseClick: _propTypes.default.func,
  titleId: _propTypes.default.string,
  closeButtonLabel: _propTypes.default.string,
  title: _propTypes.default.string,
  text: _propTypes.default.string,
  illustration: _propTypes.default.object,
  illustrationBackground: _propTypes.default.string,
  buttons: _propTypes.default.array
};