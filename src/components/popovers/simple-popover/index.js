"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimplePopover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _marger = require("../../../components/layout/marger");

var _crossIcon = require("../../../components/icons/cross-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _title = require("../../../components/typography/title");

var _text = require("../../../components/typography/text");

var _paragraph = require("../../../components/typography/paragraph");

var _gridConfig = require("../../../constants/grid-config");

var _screenConfig = require("../../../constants/screen-config");

var _button = require("../../../components/buttons/button/button");

var borderSize = 2;

var StyledLoudSpeaker = _styledComponents.default.div.withConfig({
  displayName: "simple-popover__StyledLoudSpeaker",
  componentId: "kz8b88-0"
})(["display:block;margin:0 auto;"]);

var PopoverContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-popover__PopoverContainer",
  componentId: "kz8b88-1"
})(["padding:", ";display:flex;align-items:center;position:relative;border:solid ", " ", ";box-sizing:border-box;max-width:", ";flex-basis:100%;margin-bottom:", ";background-color:", ";opacity:1;visibility:visible;transition:opacity 0.3s ease,visibility 0s ease;transition-delay:0s,0.3s;@media (min-width:", "){padding:", " ", ";}&[aria-hidden='true']{opacity:0;visibility:hidden;}"], (0, _typography.pxToRem)(40), _colorsConfig.default.line1, (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(555), (0, _typography.pxToRem)(_gridConfig.CONTAINER_PADDING_THIN), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(40));

var IconContainer = _styledComponents.default.div.withConfig({
  displayName: "simple-popover__IconContainer",
  componentId: "kz8b88-2"
})(["display:none;min-width:", ";min-height:", ";margin-right:", ";border-radius:100%;align-items:center;justify-content:center;background-color:", ";@media (min-width:", "px){display:flex;}"], (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(40), function (_ref) {
  var backgroundColor = _ref.backgroundColor;
  return backgroundColor;
}, _screenConfig.ScreenConfig.S.min);

var CrossIconButton = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "simple-popover__CrossIconButton",
  componentId: "kz8b88-3"
})(["position:absolute;top:-", ";right:-", ";transition:background-color 0.2s,color 0.2s,border-color 0.2s;"], (0, _typography.pxToRem)(borderSize), (0, _typography.pxToRem)(borderSize));
var ButtonsContainer = (0, _styledComponents.default)(_marger.Marger).withConfig({
  displayName: "simple-popover__ButtonsContainer",
  componentId: "kz8b88-4"
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
  return _react.default.createElement(PopoverContainer, (0, _extends2.default)({}, simplePopoverProps, {
    role: "dialog",
    "aria-hidden": !isVisible,
    "aria-labelledby": titleId
  }), _react.default.createElement(CrossIconButton, {
    "aria-label": closeButtonLabel,
    onClick: onCloseClick,
    type: "button",
    modifier: "beryllium",
    tiny: true,
    icon: true
  }, _react.default.createElement(_crossIcon.CrossIcon, {
    "aria-hidden": true,
    width: "8",
    height: "8",
    fill: _colorsConfig.default.background1
  })), illustration && _react.default.createElement(IconContainer, {
    backgroundColor: illustrationBackground
  }, illustration), _react.default.createElement("div", null, _react.default.createElement(_marger.Marger, {
    bottom: ".5"
  }, _react.default.createElement(_title.Title, {
    id: titleId,
    modifier: "senary",
    margin: false,
    tag: "h2"
  }, title)), _react.default.createElement(_marger.Marger, {
    top: ".5",
    bottom: "1"
  }, _react.default.createElement(_paragraph.Paragraph, {
    modifier: "quaternary"
  }, text)), buttons.length > 0 && _react.default.createElement(ButtonsContainer, {
    top: "3"
  }, buttons.map(function (_ref3, i) {
    var label = _ref3.label,
        clickOptions = _ref3.clickOptions,
        buttonProps = (0, _objectWithoutProperties2.default)(_ref3, ["label", "clickOptions"]);
    var clickHandler = clickOptions && clickOptions.closeOnClick && onCloseClick;
    return _react.default.createElement(_button.Button, (0, _extends2.default)({
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