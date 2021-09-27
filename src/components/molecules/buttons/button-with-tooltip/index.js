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
var zoomInAndOpacity = (0, _styledComponents.keyframes)(["from{transform:translateX(-50%) translateY(0) scale(.66);opacity:0;}to{transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}"], (0, _typography.pxToRem)(ARROW_SIZE));
var zoomOutAndOpacity = (0, _styledComponents.keyframes)(["from{transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}to{transform:translateX(-50%) translateY(0) scale(.66);opacity:0;}"], (0, _typography.pxToRem)(ARROW_SIZE));

var StyledButtonWithTooltip = _styledComponents.default.div.withConfig({
  displayName: "button-with-tooltip__StyledButtonWithTooltip",
  componentId: "gs3c1h-0"
})(["display:inline-block;position:relative;.k-ButtonWithTooltip__container{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(0) scale(0.66);transform-origin:50% ", ";width:max-content;max-width:", ";display:block;animation:0.16s ease ", ";opacity:0;}.k-ButtonWithTooltip__button{&:hover + .k-ButtonWithTooltip__container,&:focus + .k-ButtonWithTooltip__container{animation:0.16s ease ", ";transform:translateX(-50%) translateY(", ") scale(1);opacity:1;}}"], (0, _typography.pxToRem)(ARROW_SIZE), (0, _typography.pxToRem)(250), zoomOutAndOpacity, zoomInAndOpacity, (0, _typography.pxToRem)(ARROW_SIZE));

var ButtonWithTooltip = function ButtonWithTooltip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      tooltipText = _ref.tooltipText,
      buttonProps = _ref.buttonProps,
      tooltipProps = _ref.tooltipProps,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "children", "tooltipText", "buttonProps", "tooltipProps"]);
  return /*#__PURE__*/_react.default.createElement(StyledButtonWithTooltip, props, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ButtonWithTooltip__button', className),
    "aria-label": tooltipText
  }, buttonProps), children), /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ButtonWithTooltip__container'),
    color: _colorsConfig.default.line1,
    size: ARROW_SIZE,
    padding: 8,
    borderRadius: 4,
    position: "top",
    "aria-hidden": true,
    centered: true
  }, tooltipProps), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "tiny",
    color: "font1",
    weight: "regular"
  }, tooltipText)));
};

exports.ButtonWithTooltip = ButtonWithTooltip;
ButtonWithTooltip.protoTypes = {
  tooltipText: _propTypes.default.string.isRequired,
  children: _propTypes.default.node
};