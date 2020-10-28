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
var StyledTextInputWithUnit = styled.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["display:flex;width:1%;", ""], function (_ref) {
  var digits = _ref.digits;
  return !digits && css(["width:100%;"]);
});
var StyledTextInput = styled(TextInput).withConfig({
  displayName: "text-input-with-unit__StyledTextInput",
  componentId: "gjmccx-1"
})(["transition:all 0.2s;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;}"]);
var StyledInputUnit = styled.span.withConfig({
  displayName: "text-input-with-unit__StyledInputUnit",
  componentId: "gjmccx-2"
})(["display:flex;align-items:center;justify-content:center;background-color:", ";border:", " solid ", ";border-left:0;border-radius:0;box-sizing:border-box;padding:0 ", ";color:", ";white-space:nowrap;transition:all .2s;font-size:", ";", ";:focus{border-color:", ";color:", ";}", " ", " ", " ", " ", " ", " ", " ", ":focus + &{border-color:", ";color:", ";}"], COLORS.background1, pxToRem(2), COLORS.line1, pxToRem(15), COLORS.font1, stepToRem(0), TYPOGRAPHY.fontStyles.regular, COLORS.line2, COLORS.font1, function (_ref2) {
  var valid = _ref2.valid;
  return valid && css(["border-color:", ";color:", ";"], COLORS.tertiary2, COLORS.valid);
}, function (_ref3) {
  var error = _ref3.error;
  return error && css(["border-color:", ";color:", ";"], COLORS.error3, COLORS.error);
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && css(["color:", ";background-color:", ";"], COLORS.font2, COLORS.line1);
}, function (_ref5) {
  var tiny = _ref5.tiny;
  return tiny && css(["padding:0 ", ";"], pxToRem(10));
}, function (_ref6) {
  var huge = _ref6.huge;
  return huge && css(["padding:0 ", ";"], pxToRem(20));
}, function (_ref7) {
  var giant = _ref7.giant;
  return giant && css(["padding:0 ", ";"], pxToRem(25));
}, function (_ref8) {
  var unitWord = _ref8.unitWord;
  return unitWord && css(["font-size:", ";"], stepToRem(-1));
}, StyledTextInput, COLORS.line2, COLORS.font1);
export var TextInputWithUnit = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInputWithUnit, _PureComponent);

  var _super = _createSuper(TextInputWithUnit);

  function TextInputWithUnit(props) {
    _classCallCheck(this, TextInputWithUnit);

    return _super.call(this, props);
  }

  _createClass(TextInputWithUnit, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          type = _this$props.type,
          valid = _this$props.valid,
          error = _this$props.error,
          tiny = _this$props.tiny,
          huge = _this$props.huge,
          giant = _this$props.giant,
          center = _this$props.center,
          disabled = _this$props.disabled,
          unit = _this$props.unit,
          unitWord = _this$props.unitWord,
          others = _objectWithoutProperties(_this$props, ["type", "valid", "error", "tiny", "huge", "giant", "center", "disabled", "unit", "unitWord"]);

      return /*#__PURE__*/React.createElement(StyledTextInputWithUnit, null, /*#__PURE__*/React.createElement(StyledTextInput, _extends({
        ref: function ref(input) {
          _this.input = input;
        },
        type: type,
        valid: valid,
        error: error,
        tiny: tiny,
        huge: huge,
        giant: giant,
        center: center,
        disabled: disabled
      }, others)), /*#__PURE__*/React.createElement(StyledInputUnit, {
        valid: valid,
        error: error,
        disabled: disabled,
        tiny: tiny,
        huge: huge,
        giant: giant
      }, unit || unitWord));
    }
  }]);

  return TextInputWithUnit;
}(PureComponent);
TextInputWithUnit.propTypes = {
  type: PropTypes.string,
  valid: PropTypes.bool,
  error: PropTypes.bool,
  tiny: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  unit: PropTypes.string,
  unitWord: PropTypes.bool,
  digits: PropTypes.number
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  tiny: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  digits: null
};