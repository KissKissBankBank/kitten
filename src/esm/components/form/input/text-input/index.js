import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["valid", "error", "disabled", "name", "digits", "size", "center", "tag", "className", "style", "rounded", "darkBackground"];
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { TextareaAutoResize } from '../../../form/input/textarea-auto-resize';
import classNames from 'classnames';
export var StyledInput = styled.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-itv1lf-0"
})(["--input-padding-horizontal:", ";--input-border-width:var(--border-width);--input-height:", ";font-size:", ";line-height:1em;", ";box-sizing:border-box;border-width:var(--input-border-width);border-style:solid;border-radius:0;width:100%;appearance:none;background-color:var(--color-grey-000);color:var(--color-grey-900);border-color:var(--color-grey-400);height:var(--input-height);min-height:var(--input-height);transition:border-color 0.2s ease;::placeholder{color:var(--color-grey-700);}&.k-Form-TextInput--tiny{--input-height:", ";}&.k-Form-TextInput--regular{--input-height:", ";}&.k-Form-TextInput--big{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--huge{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}&.k-Form-TextInput--giant{--input-height:", ";@media (min-width:", "px){--input-height:", ";font-size:", ";}}padding:", " var(--input-padding-horizontal);border-radius:var(--border-radius-s);&.k-Form-TextInput--rounded{border-radius:var(--border-radius-rounded);}&.k-Form-TextInput--alignCenter{text-align:center;}:disabled{color:var(--color-grey-600);border-color:var(--color-grey-300);background-color:var(--color-grey-200);cursor:not-allowed;&:hover{border-color:var(--color-grey-300);}::placeholder{color:var(--color-grey-600);}}&.k-Form-TextInput--valid{color:var(--color-grey-900);border:var(--border-success);}&.k-Form-TextInput--error{color:var(--color-grey-900);border:var(--border-danger);}&:invalid{box-shadow:none;color:var(--color-grey-900);border:var(--border-danger);}&:hover{border:var(--border-hover);}&:focus{color:var(--color-grey-900);border-color:var(--color-grey-500);outline:var(--outline-input);outline-offset:var(--outline-offset-input);}&.k-Form-TextInput-hasDigits{width:calc( var(--input-content-width) * 1ch + (2 * (var(--input-padding-horizontal) + var(--input-border-width))) );}&.k-Form-TextInput-hasDigits_2{text-align:center;}@media (max-width:", "px){font-size:", ";}&.k-Form-TextInput--darkBackground{background-color:var(--color-grey-800);border-color:var(--color-grey-800);color:var(--color-grey-000);::placeholder{color:var(--color-grey-400);}}"], pxToRem(15), pxToRem(50), stepToRem(-1), TYPOGRAPHY.fontStyles.light, pxToRem(40), pxToRem(50), pxToRem(60), ScreenConfig.M.min, pxToRem(70), stepToRem(0), pxToRem(70), ScreenConfig.M.min, pxToRem(80), stepToRem(0), pxToRem(70), ScreenConfig.M.min, pxToRem(90), stepToRem(0), pxToRem(10), ScreenConfig.XS.max, stepToRem(0));
var StyledTextareaContainer = styled.div.withConfig({
  displayName: "text-input__StyledTextareaContainer",
  componentId: "sc-itv1lf-1"
})(["position:relative;display:flex;textarea.k-Form-TextInput{height:initial;resize:vertical;line-height:", ";&:disabled{resize:none;}padding-bottom:0;&.k-Form-TextInput--tiny{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--regular{padding-top:", ";padding-bottom:", ";}&.k-Form-TextInput--big{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--huge{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}&.k-Form-TextInput--giant{padding-top:", ";padding-bottom:", ";@media (min-width:", "px){padding-top:", ";padding-bottom:", ";}}}&.k-Form-TextInput--rounded{border-radius:var(--border-radius-rounded);}&.k-Form-TextInput--darkBackground{background-color:var(--color-grey-800);border-color:var(--color-grey-800);color:var(--color-grey-000);::placeholder{color:var(--color-grey-400);}}.k-Form-TextInput__textareaGradient{position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,0.9) );pointer-events:none;textarea.k-Form-TextInput:disabled + &{display:none;}}.k-Form-TextInput:focus-visible + .k-Form-TextInput__textareaGradient{bottom:", ";}"], pxToRem(18), pxToRem(9), pxToRem(9), pxToRem(14), pxToRem(14), pxToRem(18), pxToRem(18), ScreenConfig.M.min, pxToRem(21), pxToRem(21), pxToRem(21), pxToRem(21), ScreenConfig.M.min, pxToRem(27), pxToRem(27), pxToRem(21), pxToRem(21), ScreenConfig.M.min, pxToRem(32), pxToRem(32), pxToRem(10), pxToRem(2), pxToRem(2), pxToRem(10), pxToRem(3));
export var TextInput = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(TextInput, _PureComponent);

  function TextInput() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TextInput.prototype;

  _proto.render = function render() {
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
        className = _this$props.className,
        style = _this$props.style,
        rounded = _this$props.rounded,
        darkBackground = _this$props.darkBackground,
        others = _objectWithoutPropertiesLoose(_this$props, _excluded);

    var digitsClass = !!digits ? "k-Form-TextInput-hasDigits k-Form-TextInput-hasDigits_" + digits : null;

    if (['textarea', 'autoresize'].includes(tag)) {
      return /*#__PURE__*/React.createElement(StyledTextareaContainer, {
        className: classNames('k-Form-TextInput__textareaContainer')
      }, /*#__PURE__*/React.createElement(StyledInput, _extends({
        ref: function ref(input) {
          return _this.input = input;
        },
        as: tag === 'textarea' ? tag : TextareaAutoResize,
        disabled: disabled,
        name: name,
        className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--" + tag, "k-Form-TextInput--" + size, {
          'k-Form-TextInput--valid': valid,
          'k-Form-TextInput--error': error,
          'k-Form-TextInput--disabled': disabled,
          'k-Form-TextInput--alignCenter': center,
          'k-Form-TextInput--rounded': rounded,
          'k-Form-TextInput--darkBackground': darkBackground
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
        className: classNames('k-Form-TextInput', className, digitsClass, "k-Form-TextInput--" + size, {
          'k-Form-TextInput--valid': valid,
          'k-Form-TextInput--error': error,
          'k-Form-TextInput--disabled': disabled,
          'k-Form-TextInput--alignCenter': center,
          'k-Form-TextInput--rounded': rounded,
          'k-Form-TextInput--darkBackground': darkBackground
        }),
        style: !!digits ? _extends({
          '--input-content-width': digits
        }, style) : style
      }, others));
    }
  };

  return TextInput;
}(PureComponent);
TextInput.propTypes = {
  tag: PropTypes.oneOf(['input', 'textarea', 'autoresize']),
  valid: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge', 'giant']),
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  digits: PropTypes.number,
  rounded: PropTypes.bool,
  darkBackground: PropTypes.bool
};
TextInput.defaultProps = {
  tag: 'input',
  valid: false,
  error: false,
  size: 'regular',
  center: false,
  disabled: false,
  name: 'text',
  digits: null,
  rounded: false,
  darkBackground: false
};