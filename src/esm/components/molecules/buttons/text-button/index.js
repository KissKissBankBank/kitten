import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { mq } from '../../../../constants/screen-config';
var StyledButton = styled.button.withConfig({
  displayName: "text-button__StyledButton",
  componentId: "sc-1nng31q-0"
})(["", " display:inline-flex;align-items:center;gap:", ";color:var(--color-grey-900);text-align:left;transition:color var(--transition);&:hover{color:var(--color-primary-500);}&:active{color:var(--color-primary-700);}&:focus-visible{outline-style:auto;}svg{height:1.25em;}svg,svg path[fill]:not([fill='transparent']){fill:currentColor;}&.k-TextButton--normal{font-size:pxToRem(14);@media ", "{font-size:pxToRem(16);}}&.k-TextButton--big{font-size:pxToRem(16);@media ", "{font-size:pxToRem(20);}}"], TYPOGRAPHY.fontStyles.regular, pxToRem(10), mq.tabletAndDesktop, mq.tabletAndDesktop);
export var TextButton = function TextButton(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["className", "size"]);

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    type: "button",
    className: classNames('k-TextButton', 'k-u-reset-button', className, "k-TextButton--".concat(size))
  }, props));
};
TextButton.defaultProps = {
  size: 'normal'
};
TextButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'big'])
};