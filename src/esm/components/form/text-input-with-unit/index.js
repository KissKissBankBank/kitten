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
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import classNames from 'classnames';
var StyledTextInputWithUnit = styled.div.withConfig({
  displayName: "text-input-with-unit__StyledTextInputWithUnit",
  componentId: "gjmccx-0"
})(["display:flex;width:1%;&:not(.k-Form-TextInputWithUnit--hasDigits){width:100%;}.k-Form-TextInputWithUnit__input{&[type='number']{appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{margin:0;appearance:none;}}}.k-Form-TextInputWithUnit__unit{display:flex;align-items:center;justify-content:center;background-color:", ";border:", " solid ", ";border-left:0;border-radius:0;box-sizing:border-box;padding:0 ", ";color:", ";white-space:nowrap;transition:all 0.2s;font-size:", ";", ";&.k-Form-TextInputWithUnit__unit--valid{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--error{border-color:", ";color:", ";}&.k-Form-TextInputWithUnit__unit--disabled{color:", ";background-color:", ";}&.k-Form-TextInputWithUnit__unit--tiny{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--big,&.k-Form-TextInputWithUnit__unit--huge{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--giant{padding:0 ", ";}&.k-Form-TextInputWithUnit__unit--hasUnitWord{font-size:", ";}}&:focus-within{.k-Form-TextInputWithUnit__unit{border-color:", ";color:", ";}}&.k-Form-TextInputWithUnit--orion{.k-Form-TextInputWithUnit__input{border-top-right-radius:0;border-bottom-right-radius:0;}.k-Form-TextInputWithUnit__unit{border-top-right-radius:", ";border-bottom-right-radius:", ";}.k-Form-TextInputWithUnit__unit--big{border-top-right-radius:", ";border-bottom-right-radius:", ";}}"], COLORS.background1, pxToRem(2), COLORS.line1, pxToRem(15), COLORS.font1, stepToRem(0), TYPOGRAPHY.fontStyles.regular, COLORS.tertiary2, COLORS.valid, COLORS.error3, COLORS.error, COLORS.font2, COLORS.line1, pxToRem(10), pxToRem(20), pxToRem(25), stepToRem(-1), COLORS.line2, COLORS.font1, pxToRem(4), pxToRem(4), pxToRem(8), pxToRem(8));
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
          unit = _this$props.unit,
          unitWord = _this$props.unitWord,
          others = _objectWithoutProperties(_this$props, ["unit", "unitWord"]);

      return /*#__PURE__*/React.createElement(StyledTextInputWithUnit, {
        className: classNames('k-Form-TextInputWithUnit', "k-Form-TextInputWithUnit--".concat(this.props.variant), {
          'k-Form-TextInputWithUnit--hasDigits': !!this.props.digits
        })
      }, /*#__PURE__*/React.createElement(TextInput, _extends({
        ref: function ref(input) {
          _this.input = input;
        }
      }, others, {
        className: classNames('k-Form-TextInputWithUnit__input', this.props.className)
      })), /*#__PURE__*/React.createElement("span", {
        className: classNames('k-Form-TextInputWithUnit__unit', {
          'k-Form-TextInputWithUnit__unit--valid': this.props.valid,
          'k-Form-TextInputWithUnit__unit--error': this.props.error,
          'k-Form-TextInputWithUnit__unit--disabled': this.props.disabled,
          'k-Form-TextInputWithUnit__unit--tiny': this.props.tiny,
          'k-Form-TextInputWithUnit__unit--big': this.props.big,
          'k-Form-TextInputWithUnit__unit--huge': this.props.huge,
          'k-Form-TextInputWithUnit__unit--giant': this.props.giant,
          'k-Form-TextInputWithUnit__unit--hasUnitWord': !!unitWord
        })
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
  big: PropTypes.bool,
  huge: PropTypes.bool,
  giant: PropTypes.bool,
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  unit: PropTypes.string,
  unitWord: PropTypes.bool,
  digits: PropTypes.number,
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
TextInputWithUnit.defaultProps = {
  unit: 'λ',
  unitWord: false,
  type: 'number',
  valid: false,
  error: false,
  tiny: false,
  big: false,
  huge: false,
  giant: false,
  center: false,
  disabled: false,
  digits: null,
  variant: 'andromeda'
};