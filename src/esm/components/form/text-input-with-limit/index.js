import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import classNames from 'classnames';
var StyledTextInputWithLimit = styled.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "ufrmmb-0"
})(["position:relative;display:block;.k-Form-TextInputWithLimit__limitNumber{", ";font-size:", ";line-height:1.3;position:absolute;right:", ";top:", ";color:", ";text-shadow:", " 0 0 ", ",-", " 0 0 ", ",0 ", " 0 ", ",0 -", " 0 ", ",", " ", " ", ",-", " -", " 0 ", ",", " -", " 0 ", ",-", " ", " 0 ", ";pointer-events:none;.k-Form-TextInputWithLimit__limitNumber--disabled{text-shadow:none;}}&:focus + .k-Form-TextInputWithLimit__limitNumber,&:focus-within + .k-Form-TextInputWithLimit__limitNumber{color:", ";}.k-Form-TextInputWithLimit__limitNumber--error{color:", " !important;}.k-Form-TextInput__textareaContainer--orion,.k-Form-TextInput--orion{& + .k-Form-TextInputWithLimit__limitNumber{top:initial;bottom:", ";right:", ";}}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-2), pxToRem(5), pxToRem(5), COLORS.font2, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, COLORS.font1, COLORS.error, pxToRem(15), pxToRem(15));
export var TextInputWithLimit = function TextInputWithLimit(_ref) {
  var limit = _ref.limit,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      others = _objectWithoutProperties(_ref, ["limit", "onChange", "disabled", "value", "defaultValue"]);

  var _useState = useState(value || defaultValue),
      _useState2 = _slicedToArray(_useState, 1),
      textValue = _useState2[0];

  var _useState3 = useState(textValue.length),
      _useState4 = _slicedToArray(_useState3, 2),
      length = _useState4[0],
      setLength = _useState4[1];

  return /*#__PURE__*/React.createElement(StyledTextInputWithLimit, {
    className: "k-Form-TextInputWithLimit"
  }, /*#__PURE__*/React.createElement(TextInput, _extends({
    onChange: function onChange(e) {
      var value = e.target.value;
      setLength(value.length);

      _onChange(e);
    },
    disabled: disabled,
    defaultValue: textValue
  }, others, {
    className: classNames('k-Form-TextInputWithLimit__input')
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-Form-TextInputWithLimit__limitNumber', {
      'k-Form-TextInputWithLimit__limitNumber--disabled': disabled,
      'k-Form-TextInputWithLimit__limitNumber--error': length > limit
    })
  }, limit - length));
};
TextInputWithLimit.propTypes = {
  limit: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
};
TextInputWithLimit.defaultProps = {
  limit: 80,
  disabled: false,
  error: false,
  defaultValue: '',
  onChange: function onChange() {}
};