import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["limit", "onChange", "disabled", "value", "defaultValue"];
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextInput } from '../../../form/input/text-input';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import classNames from 'classnames';
var StyledTextInputWithLimit = styled.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "sc-1n650p3-0"
})(["position:relative;display:block;.k-Form-TextInputWithLimit__limitNumber{", ";font-size:", ";line-height:1.3;position:absolute;bottom:", ";right:", ";color:var(--color-grey-600);text-shadow:", " 0 0 var(--color-grey-000),-", " 0 0 var(--color-grey-000),0 ", " 0 var(--color-grey-000),0 -", " 0 var(--color-grey-000),", " ", " var(--color-grey-000),-", " -", " 0 var(--color-grey-000),", " -", " 0 var(--color-grey-000),-", " ", " 0 var(--color-grey-000);pointer-events:none;.k-Form-TextInputWithLimit__limitNumber--disabled{text-shadow:none;}}&:focus + .k-Form-TextInputWithLimit__limitNumber,&:focus-within + .k-Form-TextInputWithLimit__limitNumber{color:var(--color-grey-600);}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-2), pxToRem(15), pxToRem(15), pxToRem(2), pxToRem(2), pxToRem(2), pxToRem(2), pxToRem(1), pxToRem(1), pxToRem(1), pxToRem(1), pxToRem(1), pxToRem(1), pxToRem(1), pxToRem(1));
export var TextInputWithLimit = function TextInputWithLimit(_ref) {
  var limit = _ref.limit,
      _onChange = _ref.onChange,
      disabled = _ref.disabled,
      value = _ref.value,
      defaultValue = _ref.defaultValue,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(value || defaultValue),
      textValue = _useState[0];

  var _useState2 = useState(textValue.length),
      length = _useState2[0],
      setLength = _useState2[1];

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