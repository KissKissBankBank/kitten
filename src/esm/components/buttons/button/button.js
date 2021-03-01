import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import { modifierStyles } from './helpers/modifier-styles';
import { CheckedCircleIcon as KittenCheckedCircleIcon } from '../../icons/checked-circle-icon';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledButton = styled.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "sc-1q5nte0-0"
})(["display:inline-flex;align-items:center;justify-content:center;position:relative;box-sizing:border-box;", " ", ";font-size:", ";color:", ";line-height:1.3;text-decoration:none;appearance:none;cursor:pointer;&:disabled{cursor:not-allowed;}&:hover{text-decoration:none;}>:nth-child(n){margin-right:", ";text-align:left;}", " >:last-child{margin-right:0;}", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ""], function () {
  return DEFAULT;
}, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, pxToRem(10), function (_ref) {
  var modifier = _ref.modifier;
  return modifier === 'checked' && css([">:nth-last-child(2){margin-right:0;}"]);
}, function (_ref2) {
  var borderRadius = _ref2.borderRadius;
  return borderRadius > 0 && css(["border-radius:", ";"], pxToRem(borderRadius));
}, function (_ref3) {
  var tiny = _ref3.tiny;
  return tiny && TINY;
}, function (_ref4) {
  var big = _ref4.big;
  return big && BIG;
}, function (_ref5) {
  var huge = _ref5.huge;
  return huge && HUGE;
}, function (_ref6) {
  var giant = _ref6.giant;
  return giant && GIANT;
}, function (_ref7) {
  var icon = _ref7.icon,
      fluid = _ref7.fluid;
  return icon && !fluid && ICON;
}, function (_ref8) {
  var icon = _ref8.icon,
      micro = _ref8.micro,
      fluid = _ref8.fluid;
  return icon && micro && !fluid && ICON_MICRO;
}, function (_ref9) {
  var icon = _ref9.icon,
      tiny = _ref9.tiny,
      fluid = _ref9.fluid;
  return icon && tiny && !fluid && ICON_TINY;
}, function (_ref10) {
  var icon = _ref10.icon,
      big = _ref10.big,
      fluid = _ref10.fluid;
  return icon && big && !fluid && ICON_BIG;
}, function (_ref11) {
  var icon = _ref11.icon,
      huge = _ref11.huge,
      fluid = _ref11.fluid;
  return icon && huge && !fluid && ICON_HUGE;
}, function (_ref12) {
  var icon = _ref12.icon,
      giant = _ref12.giant,
      fluid = _ref12.fluid;
  return icon && giant && !fluid && ICON_GIANT;
}, function (_ref13) {
  var fluid = _ref13.fluid;
  return fluid && FLUID;
}, function (_ref14) {
  var variant = _ref14.variant;
  return variant === 'orion' && css(["", " border-radius:", ";@media (min-width:", "){border-radius:", ";}"], function () {
    return BIG;
  }, pxToRem(6), pxToRem(ScreenConfig.S.min), pxToRem(8));
}, function (_ref15) {
  var modifier = _ref15.modifier;
  return modifierStyles(modifier);
});

var checkedCircleIconStyle = function checkedCircleIconStyle(size) {
  var iconSize;

  switch (size) {
    case 'giant':
    case 'huge':
      iconSize = 33;
      break;

    case 'big':
      iconSize = 24;
      break;

    case 'tiny':
      iconSize = 15;
      break;

    default:
      iconSize = 20;
  }

  return css(["width:", ";height:", ";bottom:-", ";"], pxToRem(iconSize), pxToRem(iconSize), pxToRem(iconSize / 2));
};

var CheckedCircleIcon = styled(function (_ref16) {
  var giant = _ref16.giant,
      huge = _ref16.huge,
      big = _ref16.big,
      tiny = _ref16.tiny,
      others = _objectWithoutProperties(_ref16, ["giant", "huge", "big", "tiny"]);

  return /*#__PURE__*/React.createElement(KittenCheckedCircleIcon, others);
}).withConfig({
  displayName: "button__CheckedCircleIcon",
  componentId: "sc-1q5nte0-1"
})(["", " ", " ", " ", " ", " position:absolute;"], checkedCircleIconStyle(), function (_ref17) {
  var tiny = _ref17.tiny;
  return tiny && checkedCircleIconStyle('tiny');
}, function (_ref18) {
  var big = _ref18.big;
  return big && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig.S.min), checkedCircleIconStyle('big'));
}, function (_ref19) {
  var huge = _ref19.huge;
  return huge && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig.S.min), checkedCircleIconStyle('huge'));
}, function (_ref20) {
  var giant = _ref20.giant;
  return giant && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig.S.min), checkedCircleIconStyle('giant'));
});
export var FLUID = css(["min-width:initial;width:100%;"]);
export var DEFAULT = css(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(200), pxToRem(50), pxToRem(30), stepToRem(-1), pxToRem(200), pxToRem(50));
export var TINY = css(["min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(160), pxToRem(40), pxToRem(20), stepToRem(-1), pxToRem(160), pxToRem(40));
export var BIG = css(["@media (min-width:", "){min-width:", ";min-height:", ";padding:0 ", ";font-size:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70), pxToRem(40), stepToRem(0), pxToRem(ScreenConfig.S.min), pxToRem(220), pxToRem(70));
export var HUGE = css(["min-height:", ";font-size:", ";padding:0 ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:0 ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(80), stepToRem(0), pxToRem(40), pxToRem(ScreenConfig.M.min), pxToRem(220), pxToRem(80));
export var GIANT = css(["min-height:", ";font-size:", ";padding:0 ", ";@media (min-width:", "px){min-width:", ";min-height:", ";font-size:", ";padding:0 ", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";height:", ";}"], pxToRem(70), stepToRem(-1), pxToRem(10), ScreenConfig.M.min, pxToRem(220), pxToRem(90), stepToRem(0), pxToRem(40), pxToRem(ScreenConfig.M.min), pxToRem(220), pxToRem(90));
export var ICON = css(["min-width:initial;min-height:initial;width:", ";height:", ";padding:0;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";min-width:0;min-height:0;}"], pxToRem(50), pxToRem(50), pxToRem(50));
export var ICON_MICRO = css(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(30), pxToRem(30), pxToRem(30));
export var ICON_TINY = css(["width:", ";height:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(40), pxToRem(40), pxToRem(40));
export var ICON_BIG = css(["@media (min-width:", "){width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(ScreenConfig.S.min), pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.S.min), pxToRem(70));
export var ICON_HUGE = css(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(80), pxToRem(80), pxToRem(ScreenConfig.M.min), pxToRem(80));
export var ICON_GIANT = css(["min-width:initial;width:", ";height:", ";@media (min-width:", "){min-width:initial;width:", ";height:", ";}@media screen and (min-width:", ") and (-ms-high-contrast:active),(-ms-high-contrast:none){width:", ";}"], pxToRem(70), pxToRem(70), pxToRem(ScreenConfig.M.min), pxToRem(90), pxToRem(90), pxToRem(ScreenConfig.M.min), pxToRem(90));
export var Button = /*#__PURE__*/function (_Component) {
  _inherits(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          modifier = _this$props.modifier,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["children", "modifier", "variant"]);

      var checked = modifier === 'checked' && {
        'aria-checked': true
      };
      modifier === 'checked' && console.warn("Warning: In <Button /> component, 'checked' modifier is deprecated.");
      return /*#__PURE__*/React.createElement(StyledButton, _extends({
        modifier: modifier,
        variant: variant
      }, checked, props), children, modifier === 'checked' && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
        giant: !!props.giant,
        huge: !!props.huge,
        big: !!props.big,
        tiny: !!props.tiny,
        circleColor: COLORS.primary1,
        checkedColor: COLORS.background1
      }));
    }
  }]);

  return Button;
}(Component);
Button.propTypes = {
  borderRadius: PropTypes.number,
  micro: PropTypes.bool,
  tiny: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  modifier: PropTypes.oneOf(['hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked', 'social_facebook', 'social_twitter', 'social_linkedin', 'social_instagram', 'social_youtube', 'social_pinterest']),
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Button.defaultProps = {
  micro: false,
  tiny: false,
  big: false,
  huge: false,
  giant: false,
  fluid: false,
  icon: false,
  modifier: 'hydrogen',
  borderRadius: 0,
  variant: 'andromeda'
};