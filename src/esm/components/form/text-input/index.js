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
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
var borderWidth = pxToRem(2);
var verticalPadding = pxToRem(10);
var styledTextInput = css(["font-size:", ";line-height:1.3;", ";box-sizing:border-box;border-width:", ";border-style:solid;border-radius:0;width:100%;height:", ";padding:", " ", ";appearance:none;background-color:", ";color:", ";border-color:", ";outline:none;", ";::placeholder{color:", ";}:focus{outline:none;color:", ";border-color:", ";}:disabled{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;}", " ", " &:invalid{box-shadow:none;outline:none;&:not(:focus){color:", ";border-color:", ";}}", " ", " ", " ", ""], stepToRem(-1), TYPOGRAPHY.fontStyles.light, borderWidth, pxToRem(50), pxToRem(10), pxToRem(15), COLORS.background1, COLORS.font1, COLORS.line1, function (_ref) {
  var digits = _ref.digits;
  return digitsStyles(digits);
}, COLORS.font2, COLORS.font1, COLORS.line2, COLORS.font2, COLORS.line1, COLORS.line1, function (_ref2) {
  var valid = _ref2.valid;
  return valid && css(["&:not(:focus){color:", ";border-color:", ";}"], COLORS.tertiary2, COLORS.tertiary2);
}, function (_ref3) {
  var error = _ref3.error;
  return error && css(["&:not(:focus){color:", ";border-color:", ";}"], COLORS.error3, COLORS.error3);
}, COLORS.error3, COLORS.error3, function (_ref4) {
  var tiny = _ref4.tiny;
  return tiny && css(["height:", ";"], pxToRem(40));
}, function (_ref5) {
  var huge = _ref5.huge;
  return huge && css(["height:", ";@media (min-width:", "px){height:", ";font-size:", ";}"], pxToRem(70), ScreenConfig.M.min, pxToRem(80), stepToRem(0));
}, function (_ref6) {
  var giant = _ref6.giant;
  return giant && css(["height:", ";@media (min-width:", "px){height:", ";font-size:", ";}"], pxToRem(70), ScreenConfig.M.min, pxToRem(90), stepToRem(0));
}, function (_ref7) {
  var center = _ref7.center;
  return center && css(["text-align:center;"]);
});
var StyledTextarea = styled.div.withConfig({
  displayName: "text-input__StyledTextarea",
  componentId: "sc-11wej6v-0"
})(["position:relative;display:flex;"]);
var StyledInput = styled.input.withConfig({
  displayName: "text-input__StyledInput",
  componentId: "sc-11wej6v-1"
})(["", ""], styledTextInput);
var StyledInputTextarea = styled.textarea.withConfig({
  displayName: "text-input__StyledInputTextarea",
  componentId: "sc-11wej6v-2"
})(["", " height:initial;resize:vertical;:disabled{resize:none;}"], styledTextInput);
var StyledGradientTextarea = styled.div.withConfig({
  displayName: "text-input__StyledGradientTextarea",
  componentId: "sc-11wej6v-3"
})(["position:absolute;left:", ";right:", ";bottom:", ";height:", ";background-image:linear-gradient( to bottom,rgba(255,255,255,0),", " );pointer-events:none;", ":disabled + &{display:none;}"], verticalPadding, verticalPadding, borderWidth, verticalPadding, COLORS.background1, StyledInputTextarea);
export var digitsStyles = function digitsStyles(digits) {
  var horizontalPadding = 15;
  var digitLength = 15;

  switch ("".concat(digits)) {
    case '2':
      return css(["width:", ";text-align:center;"], pxToRem(horizontalPadding * 2 + digitLength * 2));

    case '6':
      return css(["width:", ";"], pxToRem(horizontalPadding * 2 + digitLength * 6));

    case '12':
      return css(["width:", ";"], pxToRem(horizontalPadding * 2 + digitLength * 12));
  }
};
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
          others = _objectWithoutProperties(_this$props, ["valid", "error", "disabled", "name", "digits", "tiny", "huge", "giant", "center", "tag"]);

      if (tag === 'textarea') {
        return /*#__PURE__*/React.createElement(StyledTextarea, null, /*#__PURE__*/React.createElement(StyledInputTextarea, _extends({
          ref: function ref(input) {
            return _this.input = input;
          },
          valid: valid,
          error: error,
          disabled: disabled,
          tiny: tiny,
          digits: digits,
          name: name,
          huge: huge,
          giant: giant,
          center: center
        }, others)), /*#__PURE__*/React.createElement(StyledGradientTextarea, null));
      } else {
        return /*#__PURE__*/React.createElement(StyledInput, _extends({
          ref: function ref(input) {
            return _this.input = input;
          },
          valid: valid,
          error: error,
          disabled: disabled,
          tiny: tiny,
          digits: digits,
          name: name,
          huge: huge,
          giant: giant,
          center: center
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
  digits: PropTypes.number
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
  digits: null
};