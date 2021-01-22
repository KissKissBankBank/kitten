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
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledTextInputWithButton = styled.div.withConfig({
  displayName: "text-input-with-button__StyledTextInputWithButton",
  componentId: "sc-1yqni7d-0"
})(["display:flex;"]);
var StyledTextInput = styled(TextInput).withConfig({
  displayName: "text-input-with-button__StyledTextInput",
  componentId: "sc-1yqni7d-1"
})(["border-right:0;"]);
var StyledButton = styled.button.withConfig({
  displayName: "text-input-with-button__StyledButton",
  componentId: "sc-1yqni7d-2"
})(["", ";font-size:", ";line-height:1.3;flex:1 0 auto;appearance:none;cursor:pointer;padding:0 ", ";border-radius:0;", ";", " ", " input:invalid:not(:focus) + &{background-color:", ";border-color:", ";}", ""], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(30), function (_ref) {
  var modifier = _ref.modifier;
  return modifierStyles(modifier);
}, function (_ref2) {
  var valid = _ref2.valid;
  return valid && css(["background-color:", ";border-color:", ";"], COLORS.valid, COLORS.valid);
}, function (_ref3) {
  var error = _ref3.error;
  return error && css(["background-color:", ";border-color:", ";"], COLORS.error, COLORS.error);
}, COLORS.error, COLORS.error, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && css(["cursor:not-allowed;"]);
});
export var TextInputWithButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInputWithButton, _PureComponent);

  var _super = _createSuper(TextInputWithButton);

  function TextInputWithButton() {
    _classCallCheck(this, TextInputWithButton);

    return _super.apply(this, arguments);
  }

  _createClass(TextInputWithButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          valid = _this$props.valid,
          error = _this$props.error,
          disabled = _this$props.disabled,
          tiny = _this$props.tiny,
          huge = _this$props.huge,
          giant = _this$props.giant,
          value = _this$props.value,
          buttonValue = _this$props.buttonValue,
          modifier = _this$props.modifier,
          buttonProps = _this$props.buttonProps,
          inputValue = _this$props.inputValue,
          others = _objectWithoutProperties(_this$props, ["valid", "error", "disabled", "tiny", "huge", "giant", "value", "buttonValue", "modifier", "buttonProps", "inputValue"]);

      return /*#__PURE__*/React.createElement(StyledTextInputWithButton, null, /*#__PURE__*/React.createElement(StyledTextInput, _extends({}, others, {
        valid: valid,
        error: error,
        disabled: disabled,
        tiny: tiny,
        huge: huge,
        giant: giant,
        value: inputValue
      })), /*#__PURE__*/React.createElement(StyledButton, _extends({
        type: "button",
        modifier: modifier,
        valid: valid,
        error: error,
        disabled: disabled
      }, buttonProps), value || buttonValue));
    }
  }]);

  return TextInputWithButton;
}(PureComponent);
TextInputWithButton.propTypes = {
  valid: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  tiny: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  modifier: PropTypes.string,
  inputValue: PropTypes.string,
  // DEPRECATED: do not use prop `value`. Use `buttonValue` instead.
  value: deprecated(PropTypes.node, 'Use `buttonValue` instead.'),
  buttonValue: PropTypes.node
};
TextInputWithButton.defaultProps = {
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  huge: false,
  giant: false,
  buttonValue: 'Button',
  modifier: 'beryllium'
};