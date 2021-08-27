import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
var _excluded = ["valid", "error", "disabled", "name", "digits", "size", "center", "tag", "variant", "className", "style", "rounded"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import classNames from 'classnames';
var StyledInput = styled.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-0"
})(["--input-padding-horizontal:", ";--input-border-width:", ";--input-height:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:", ";border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:", ";color:", ";border-color:", ";height:var(--input-height);min-height:var(--input-height);transition:border-color 0.2s ease;::placeholder{color:", ";}&.k-Form-TextInput--tiny{--input-height:", ";}&.k-Form-TextInput--regular{--input-height:", ";}&.k-Form-TextInput--big{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--huge{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--giant{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}padding:", " ", ";padding:", " var(--input-padding-horizontal);&.k-Form-TextInput--orion{border-radius:", ";&.k-Form-TextInput--big,&.k-Form-TextInput--huge,&.k-Form-TextInput--giant{border-radius:", ";@media (min-width:", "px){--input-padding-horizontal:", ";border-radius:", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding:", " ", ";}}}}&.k-Form-TextInput--rounded{border-radius:var(--input-height);}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;::placeholder{color:", ";}}&.k-Form-TextInput--valid{color:", ";border-color:", ";}&.k-Form-TextInput--error{color:", ";border-color:", ";}&:invalid{box-shadow:none;color:", ";border-color:", ";}&:hover{border-color:", ";}&:focus{color:", ";border-color:", ";outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){&.k-Form-TextInput-hasDigits_2{text-align:center;width:calc(2em + ", ");&.k-Form-TextInput--orion{width:calc(2em + ", ");@media (min-width:", "px){width:calc(2em + ", ");}}}&.k-Form-TextInput-hasDigits_4{width:calc(4em + ", ");&.k-Form-TextInput--orion{width:calc(4em + ", ");@media (min-width:", "px){width:calc(4em + ", ");}}}&.k-Form-TextInput-hasDigits_12{width:calc(12em + ", ");&.k-Form-TextInput--orion{width:calc(12em + ", ");@media (min-width:", "px){width:calc(12em + ", ");}}}}@media (max-width:", "px){font-size:", ";}"], pxToRem(15), pxToRem(2), pxToRem(50), stepToRem(-1), TYPOGRAPHY.fontStyles.light, pxToRem(2), COLORS.background1, COLORS.font1, COLORS.line1, COLORS.font2, pxToRem(40), pxToRem(50), pxToRem(60), ScreenConfig.M.min, pxToRem(70), stepToRem(0), pxToRem(70), ScreenConfig.M.min, pxToRem(80), stepToRem(0), pxToRem(70), ScreenConfig.M.min, pxToRem(90), stepToRem(0), pxToRem(10), pxToRem(15), pxToRem(10), pxToRem(4), pxToRem(6), ScreenConfig.M.min, pxToRem(30), pxToRem(8), stepToRem(0), pxToRem(10), pxToRem(30), COLORS.font2, COLORS.line1, COLORS.line1, COLORS.line3, COLORS.tertiary2, COLORS.tertiary2, COLORS.error3, COLORS.error3, COLORS.error3, COLORS.error3, COLORS.line2, COLORS.font1, COLORS.font2, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)), pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)), pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)), ScreenConfig.XS.max, stepToRem(0));
var StyledTextareaContainer = styled.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-11wej6v-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:1.3;&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--orion{&.k-Form-TextInput--tiny{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--regular{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--big{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--huge{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--giant{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}}}&.k-Form-TextInput--rounded{border-radius:var(--input-height);}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}"], pxToRem(9), pxToRem(9), pxToRem(14), pxToRem(14), pxToRem(18), pxToRem(18), ScreenConfig.M.min, pxToRem(21), pxToRem(21), pxToRem(21), pxToRem(21), ScreenConfig.M.min, pxToRem(27), pxToRem(27), pxToRem(21), pxToRem(21), ScreenConfig.M.min, pxToRem(32), pxToRem(32), pxToRem(10), pxToRem(2), pxToRem(3), pxToRem(10), COLORS.background1);
export var TextInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  var _super = _createSuper(TextInput);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _super.apply(this, arguments);
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          name = _this$props.name,
          digits = _this$props.digits,
          size = _this$props.size,
          center = _this$props.center,
          tag = _this$props.tag,
          variant = _this$props.variant,
          className = _this$props.className,
          style = _this$props.style,
          rounded = _this$props.rounded,
          others = _objectWithoutProperties(_this$props, _excluded);

      var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_".concat(digits) : null;

      if (tag === 'textarea') {
        return /*#__PURE__*/React.createElement(StyledTextareaContainer, {
          className: classNames('k-Form-TextInput__textareaContainer')
        }, /*#__PURE__*/React.createElement(StyledInput, _extends({
          ref: function ref(input) {
            return _this.input = input;
          },
          as: "textarea",
          disabled: disabled,
          name: name,
          className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), "k-Form-TextInput--".concat(size), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--alignCenter': center,
            'k-Form-TextInput--rounded': rounded
          }),
          style: !!digits ? _extends({
            '--input-content-width': digits
          }, style) : style
        }, others)), /*#__PURE__*/React.createElement("div", {
          className: "k-Form-TextInput__textareaGradient"
        }));
      } else {
        return /*#__PURE__*/React.createElement(StyledInput, _extends({
          ref: function ref(input) {
            return _this.input = input;
          },
          disabled: disabled,
          name: name,
          className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), "k-Form-TextInput--".concat(size), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--alignCenter': center,
            'k-Form-TextInput--rounded': rounded
          }),
          style: !!digits ? _extends({
            '--input-content-width': digits
          }, style) : style
        }, others));
      }
    }
  }]);

  return TextInput;
}(PureComponent);
TextInput.propTypes = {
  tag: PropTypes.string,
  valid: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  digits: PropTypes.number,
  variant: PropTypes.string,
  rounded: PropTypes.bool
};
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  size: 'regular',
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  variant: 'andromeda',
  rounded: false
};