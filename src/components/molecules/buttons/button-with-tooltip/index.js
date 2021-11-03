"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonWithTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _arrowContainer = require("../../../../components/molecules/boxes/arrow-container");

var _button = require("../../../../components/molecules/buttons/button");

var _text = require("../../../../components/atoms/typography/text");

var ARROW_SIZE = 7;
var ARROW_DISTANCE = 10;
var zoomInAndOpacity = (0, _styledComponents.keyframes)(["from{transform:translateX(var(--ButtonWithTooltip-translate)) translateY(0) scale(.66);opacity:0;}to{transform:translateX(var(--ButtonWithTooltip-translate)) translateY(", ") scale(1);opacity:1;}"], (0, _typography.pxToRem)(ARROW_SIZE));

var StyledButtonWithTooltip = _styledComponents.default.div.withConfig({
  displayName: "button-with-tooltip__StyledButtonWithTooltip",
  componentId: "gs3c1h-0"
})(["--ButtonWithTooltip-translate:-50%;--ButtonWithTooltip-origin:50%;display:inline-block;position:relative;.k-ButtonWithTooltip__tooltip{position:absolute;top:100%;left:50%;transform:translateX(var(--ButtonWithTooltip-translate)) translateY(0) scale(0.66);transform-origin:var(--ButtonWithTooltip-origin) ", ";opacity:0;width:max-content;max-width:", ";display:block;}.k-ButtonWithTooltip__button{&:hover + .k-ButtonWithTooltip__tooltip,&:focus + .k-ButtonWithTooltip__tooltip{animation:0.16s ease ", ";transform:translateX(var(--ButtonWithTooltip-translate)) translateY(", ") scale(1);opacity:1;}}&.k-ButtonWithTooltip--left{--ButtonWithTooltip-translate:calc( -100% + ", " );--ButtonWithTooltip-origin:calc( 100% - ", " );}&.k-ButtonWithTooltip--right{--ButtonWithTooltip-translate:calc( 0% - ", " );--ButtonWithTooltip-origin:", ";}"], (0, _typography.pxToRem)(ARROW_SIZE), (0, _typography.pxToRem)(250), zoomInAndOpacity, (0, _typography.pxToRem)(ARROW_SIZE), (0, _typography.pxToRem)(ARROW_SIZE + ARROW_DISTANCE), (0, _typography.pxToRem)(ARROW_SIZE + ARROW_DISTANCE), (0, _typography.pxToRem)(ARROW_SIZE + ARROW_DISTANCE), (0, _typography.pxToRem)(ARROW_SIZE + ARROW_DISTANCE));

var ButtonWithTooltip = function ButtonWithTooltip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      tooltipText = _ref.tooltipText,
      buttonProps = _ref.buttonProps,
      tooltipProps = _ref.tooltipProps,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "tooltipText", "buttonProps", "tooltipProps", "position"]);
  return /*#__PURE__*/_react.default.createElement(StyledButtonWithTooltip, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ButtonWithTooltip', className, "k-ButtonWithTooltip--".concat(position))
  }), /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    "aria-label": tooltipText
  }, buttonProps, {
    className: (0, _classnames.default)('k-ButtonWithTooltip__button', buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.className)
  }), children), /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, (0, _extends2.default)({
    color: _colorsConfig.default.line1,
    size: ARROW_SIZE,
    padding: 8,
    borderRadius: 4,
    position: "top",
    "aria-hidden": true,
    centered: position === 'center' || null,
    distance: position !== 'center' ? ARROW_DISTANCE : null,
    distanceIsReverse: position === 'left' || null
  }, tooltipProps, {
    className: (0, _classnames.default)('k-ButtonWithTooltip__tooltip', tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.className)
  }), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, tooltipText)));
};

exports.ButtonWithTooltip = ButtonWithTooltip;
ButtonWithTooltip.protoTypes = {
  tooltipText: _propTypes.default.string.isRequired,
  children: _propTypes.default.node,
  position: _propTypes.default.oneOf(['left', 'center', 'right'])
};