import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
var errorColor = css(["", ""], function (_ref) {
  var error = _ref.error;
  return error && css(["color:", ";"], COLORS.error);
});
var FocusTextInput = styled(TextInput).withConfig({
  displayName: "text-input-with-limit__FocusTextInput",
  componentId: "ufrmmb-0"
})([":focus + div{color:", ";", "}"], COLORS.font1, errorColor);
var StyledTextInputWithLimit = styled.div.withConfig({
  displayName: "text-input-with-limit__StyledTextInputWithLimit",
  componentId: "ufrmmb-1"
})(["position:relative;display:block;"]);
var StyledCounter = styled.div.withConfig({
  displayName: "text-input-with-limit__StyledCounter",
  componentId: "ufrmmb-2"
})(["", ";font-size:", ";line-height:1.3;position:absolute;right:0;top:0;margin-top:", ";margin-right:", ";color:", ";text-shadow:", " 0 0 ", ",-", " 0 0 ", ",0 ", " 0 ", ",0 -", " 0 ", ",", " ", " ", ",-", " -", " 0 ", ",", " -", " 0 ", ",-", " ", " 0 ", ";pointer-events:none;", " ", ""], TYPOGRAPHY.fontStyles.regular, stepToRem(-2), pxToRem(5), pxToRem(5), COLORS.font2, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(2), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, pxToRem(1), pxToRem(1), COLORS.background1, errorColor, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && css(["text-shadow:none;"]);
});
export var TextInputWithLimit = function TextInputWithLimit(_ref3) {
  var tiny = _ref3.tiny,
      limit = _ref3.limit,
      _onChange = _ref3.onChange,
      disabled = _ref3.disabled,
      value = _ref3.value,
      defaultValue = _ref3.defaultValue,
      others = _objectWithoutProperties(_ref3, ["tiny", "limit", "onChange", "disabled", "value", "defaultValue"]);

  var _useState = useState(value || defaultValue),
      _useState2 = _slicedToArray(_useState, 1),
      textValue = _useState2[0];

  var _useState3 = useState(textValue.length),
      _useState4 = _slicedToArray(_useState3, 2),
      length = _useState4[0],
      setLength = _useState4[1];

  return /*#__PURE__*/React.createElement(StyledTextInputWithLimit, null, /*#__PURE__*/React.createElement(FocusTextInput, _extends({
    onChange: function onChange(e) {
      var value = e.target.value;
      setLength(value.length);

      _onChange(e);
    },
    disabled: disabled,
    tiny: tiny,
    defaultValue: textValue
  }, others)), /*#__PURE__*/React.createElement(StyledCounter, {
    error: length > limit,
    disabled: disabled
  }, limit - length));
};
TextInputWithLimit.propTypes = {
  limit: PropTypes.number,
  disabled: PropTypes.bool,
  tiny: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string
};
TextInputWithLimit.defaultProps = {
  limit: 80,
  disabled: false,
  tiny: false,
  error: false,
  defaultValue: '',
  onChange: function onChange() {}
};