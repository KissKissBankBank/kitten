import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "size"];
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { mq } from '../../../constants/screen-config';
var StyledButton = styled.button.withConfig({
  displayName: "text-button__StyledButton",
  componentId: "sc-1b04xr2-0"
})(["", " display:inline-flex;align-items:center;gap:", ";color:var(--color-grey-900);text-align:left;transition:color var(--transition);&:hover{color:var(--color-primary-500);}&:active{color:var(--color-primary-700);}&:focus-visible{outline-style:auto;}svg{height:1.25em;}svg,svg path[fill]:not([fill='transparent']){fill:currentColor;}&.k-TextButton--medium{font-size:", ";@media ", "{font-size:", ";}}&.k-TextButton--large{font-size:", ";@media ", "{font-size:", ";}}"], TYPOGRAPHY.fontStyles['500'], pxToRem(10), pxToRem(14), mq.tabletAndDesktop, pxToRem(16), pxToRem(16), mq.tabletAndDesktop, pxToRem(20));
export var TextButton = function TextButton(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    type: "button",
    className: classNames('k-TextButton', 'k-u-reset-button', className, "k-TextButton--" + size)
  }, props));
};
TextButton.defaultProps = {
  size: 'medium'
};
TextButton.propTypes = {
  size: PropTypes.oneOf(['medium', 'large'])
};