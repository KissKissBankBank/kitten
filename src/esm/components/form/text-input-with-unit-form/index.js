import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { Grid as KittenGrid, GridCol } from '../../../components/grid/grid';
import { TextInputWithUnit } from '../../../components/form/text-input-with-unit';
import { Text } from '../../../components/typography/text';
import { Label } from '../../../components/form/label';
import { Button as KittenButton } from '../../../components/buttons/button';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledFormContainer = styled.form.withConfig({
  displayName: "text-input-with-unit-form__StyledFormContainer",
  componentId: "wjoixz-0"
})(["margin:0;padding:0;"]);
var StyledGridPosition = styled(function (_ref) {
  var align = _ref.align,
      others = _objectWithoutProperties(_ref, ["align"]);

  return /*#__PURE__*/React.createElement(KittenGrid, others);
}).withConfig({
  displayName: "text-input-with-unit-form__StyledGridPosition",
  componentId: "wjoixz-1"
})(["", ""], function (_ref2) {
  var align = _ref2.align;
  return align === 'center' && css(["display:flex;justify-content:center;"]);
});
var StyledButton = styled(function (_ref3) {
  var version = _ref3.version,
      others = _objectWithoutProperties(_ref3, ["version"]);

  return /*#__PURE__*/React.createElement(KittenButton, others);
}).withConfig({
  displayName: "text-input-with-unit-form__StyledButton",
  componentId: "wjoixz-2"
})(["@media (min-width:", "px){width:100%:}", ""], ScreenConfig.S.min, function (_ref4) {
  var version = _ref4.version;
  return version === 'tiny' && css(["width:100%;"]);
});
export var TextInputWithUnitForm = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInputWithUnitForm, _PureComponent);

  var _super = _createSuper(TextInputWithUnitForm);

  function TextInputWithUnitForm() {
    _classCallCheck(this, TextInputWithUnitForm);

    return _super.apply(this, arguments);
  }

  _createClass(TextInputWithUnitForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          align = _this$props.align,
          formIsDisabled = _this$props.formIsDisabled,
          inputId = _this$props.inputId,
          inputPlaceholder = _this$props.inputPlaceholder,
          inputUnit = _this$props.inputUnit,
          inputLabel = _this$props.inputLabel,
          inputDefaultValue = _this$props.inputDefaultValue,
          inputIsOnError = _this$props.inputIsOnError,
          errorMessage = _this$props.errorMessage,
          buttonLabel = _this$props.buttonLabel,
          onButtonMouseEnter = _this$props.onButtonMouseEnter,
          onButtonMouseLeave = _this$props.onButtonMouseLeave,
          onFormSubmit = _this$props.onFormSubmit,
          onInputBlur = _this$props.onInputBlur,
          onInputChange = _this$props.onInputChange,
          onInputFocus = _this$props.onInputFocus,
          version = _this$props.version;
      return /*#__PURE__*/React.createElement(StyledFormContainer, {
        onSubmit: onFormSubmit
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "3",
        bottom: !inputIsOnError ? 3 : 1
      }, /*#__PURE__*/React.createElement(StyledGridPosition, {
        align: align
      }, /*#__PURE__*/React.createElement(GridCol, {
        "col-m": version === 'tiny' ? 0 : 5,
        "col-xs": version === 'tiny' ? 0 : 7
      }, /*#__PURE__*/React.createElement(Marger, {
        bottom: "1.5"
      }, /*#__PURE__*/React.createElement(Label, {
        size: "micro",
        htmlFor: inputId
      }, inputLabel)), /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: inputIsOnError ? 1 : null
      }, /*#__PURE__*/React.createElement(TextInputWithUnit, {
        error: inputIsOnError,
        id: inputId,
        type: "number",
        placeholder: inputPlaceholder,
        unit: inputUnit,
        disabled: formIsDisabled,
        onBlur: onInputBlur,
        onChange: onInputChange,
        onFocus: onInputFocus,
        defaultValue: inputDefaultValue,
        autoComplete: "off"
      })), inputIsOnError && /*#__PURE__*/React.createElement(Marger, {
        top: "1"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "micro",
        color: "error",
        weight: "regular"
      }, errorMessage))))), /*#__PURE__*/React.createElement(StyledGridPosition, {
        align: align
      }, /*#__PURE__*/React.createElement(StyledButton, {
        size: "big",
        modifier: "helium",
        type: "submit",
        "aria-label": buttonLabel,
        onMouseEnter: onButtonMouseEnter,
        onMouseLeave: onButtonMouseLeave,
        disabled: formIsDisabled,
        version: version
      }, buttonLabel)));
    }
  }]);

  return TextInputWithUnitForm;
}(PureComponent);
TextInputWithUnitForm.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string.isRequired,
  inputUnit: PropTypes.string.isRequired,
  inputDefaultValue: PropTypes.string,
  onInputBlur: PropTypes.func,
  onInputChange: PropTypes.func,
  onInputFocus: PropTypes.func,
  inputIsOnError: PropTypes.bool,
  errorMessage: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  onButtonMouseEnter: PropTypes.func,
  onButtonMouseLeave: PropTypes.func,
  align: PropTypes.string,
  formIsDisabled: PropTypes.bool,
  onFormSubmit: PropTypes.func,
  version: PropTypes.oneOf(['default', 'tiny'])
};
TextInputWithUnitForm.defaultProps = {
  inputId: '',
  inputLabel: '',
  inputUnit: '',
  buttonLabel: '',
  inputPlaceholder: '',
  inputDefaultValue: '',
  onInputBlur: function onInputBlur() {},
  onInputChange: function onInputChange() {},
  onInputFocus: function onInputFocus() {},
  inputIsOnError: false,
  errorMessage: '',
  onButtonMouseEnter: function onButtonMouseEnter() {},
  onButtonMouseLeave: function onButtonMouseLeave() {},
  formIsDisabled: false,
  onFormSubmit: function onFormSubmit() {},
  align: 'center',
  version: 'default'
};