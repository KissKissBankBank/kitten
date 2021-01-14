import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
})(["--input-padding-horizontal:", ";--input-border-width:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:", ";border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:", ";color:", ";border-color:", ";outline:none;::placeholder{color:", ";}height:", ";&.k-Form-TextInput--tiny{height:", ";}&.k-Form-TextInput--huge{height:", ";@media (min-width:", "px){height:", ";font-size:", ";}}&.k-Form-TextInput--giant{height:", ";@media (min-width:", "px){height:", ";font-size:", ";}}padding:", " ", ";padding:", " var(--input-padding-horizontal);&.k-Form-TextInput--orion{border-radius:", ";height:", ";@media (min-width:", "px){--input-padding-horizontal:", ";border-radius:", ";height:", ";font-size:", ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){padding:", " ", ";}}}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}&.k-Form-TextInput--valid{color:", ";border-color:", ";}&.k-Form-TextInput--error{color:", ";border-color:", ";}&:invalid{box-shadow:none;outline:none;color:", ";border-color:", ";}&:focus{outline:none;color:", ";border-color:", ";}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){&.k-Form-TextInput-hasDigits_2{text-align:center;width:calc(2em + ", ");&.k-Form-TextInput--orion{width:calc(2em + ", ");@media (min-width:", "px){width:calc(2em + ", ");}}}&.k-Form-TextInput-hasDigits_4{width:calc(4em + ", ");&.k-Form-TextInput--orion{width:calc(4em + ", ");@media (min-width:", "px){width:calc(4em + ", ");}}}&.k-Form-TextInput-hasDigits_12{width:calc(12em + ", ");&.k-Form-TextInput--orion{width:calc(12em + ", ");@media (min-width:", "px){width:calc(12em + ", ");}}}}"], pxToRem(15), pxToRem(2), stepToRem(-1), TYPOGRAPHY.fontStyles.light, pxToRem(2), COLORS.background1, COLORS.font1, COLORS.line1, COLORS.font2, pxToRem(50), pxToRem(40), pxToRem(70), ScreenConfig.M.min, pxToRem(80), stepToRem(0), pxToRem(70), ScreenConfig.M.min, pxToRem(90), stepToRem(0), pxToRem(10), pxToRem(15), pxToRem(10), pxToRem(6), pxToRem(60), ScreenConfig.M.min, pxToRem(30), pxToRem(8), pxToRem(70), stepToRem(0), pxToRem(10), pxToRem(30), COLORS.font2, COLORS.line1, COLORS.line1, COLORS.tertiary2, COLORS.tertiary2, COLORS.error3, COLORS.error3, COLORS.error3, COLORS.error3, COLORS.font1, COLORS.line2, pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)), pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)), pxToRem(2 * (10 + 2)), pxToRem(2 * (15 + 2)), ScreenConfig.M.min, pxToRem(2 * (30 + 2)));
var StyledTextareaContainer = styled.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-11wej6v-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:1.3;&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--orion{padding:", " ", " 0;min-height:", ";@media (min-width:", "px){padding:", " ", " 0;min-height:", ";}}}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}"], pxToRem(21), pxToRem(15), pxToRem(60), ScreenConfig.M.min, pxToRem(25), pxToRem(30), pxToRem(70), pxToRem(10), pxToRem(10), pxToRem(3), pxToRem(10), COLORS.background1);
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
          tiny = _this$props.tiny,
          huge = _this$props.huge,
          giant = _this$props.giant,
          center = _this$props.center,
          tag = _this$props.tag,
          variant = _this$props.variant,
          className = _this$props.className,
          style = _this$props.style,
          others = _objectWithoutProperties(_this$props, ["valid", "error", "disabled", "name", "digits", "tiny", "huge", "giant", "center", "tag", "variant", "className", "style"]);

      var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_".concat(digits) : null;

      if (tag === 'textarea') {
        return /*#__PURE__*/React.createElement(StyledTextareaContainer, {
          className: classNames('k-Form-TextInput__textareaContainer', "k-Form-TextInput__textareaContainer--".concat(variant))
        }, /*#__PURE__*/React.createElement(StyledInput, _extends({
          ref: function ref(input) {
            return _this.input = input;
          },
          as: "textarea",
          disabled: disabled,
          name: name,
          className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--tiny': tiny,
            'k-Form-TextInput--huge': huge,
            'k-Form-TextInput--giant': giant,
            'k-Form-TextInput--alignCenter': center
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
          className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--".concat(variant), {
            'k-Form-TextInput--valid': valid,
            'k-Form-TextInput--error': error,
            'k-Form-TextInput--disabled': disabled,
            'k-Form-TextInput--tiny': tiny,
            'k-Form-TextInput--huge': huge,
            'k-Form-TextInput--giant': giant,
            'k-Form-TextInput--alignCenter': center
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
  tiny: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  digits: PropTypes.number,
  variant: PropTypes.string
};
TextInput.defaultProps = {
  tag: 'input',
  // or 'textarea'
  valid: false,
  error: false,
  tiny: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  variant: 'andromeda'
};