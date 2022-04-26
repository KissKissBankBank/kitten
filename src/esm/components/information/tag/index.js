import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type", "size", "variant", "className", "flex", "children"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
var StyledTag = styled.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-t9jrs5-0"
})(["display:inline-block;height:", ";box-sizing:border-box;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:var(--border-radius-rounded);text-transform:uppercase;letter-spacing:0.1em;&.k-Tag--flex{display:inline-flex;align-items:center;gap:", ";}&.k-Tag--small{gap:", ";height:", ";padding:0 ", ";font-size:", ";line-height:", ";}&{svg{&,path{fill:currentColor;}}}&.k-Tag--light.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--success{background-color:var(--color-success-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-grey-900);}&.k-Tag--light.k-Tag--disabled{background-color:var(--color-grey-300);color:var(--color-grey-900);}&.k-Tag--status.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-primary-700);}&.k-Tag--status.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-warning-900);}&.k-Tag--status.k-Tag--success{background-color:var(--color-success-100);color:var(--color-success-700);}&.k-Tag--status.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-danger-700);}&.k-Tag--status.k-Tag--disabled{background-color:var(--color-grey-300);color:var(--color-grey-800);}&.k-Tag--dark.k-Tag--info{background-color:var(--color-primary-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--warning{background-color:var(--color-warning-700);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--success{background-color:var(--color-success-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--error{background-color:var(--color-danger-500);color:var(--color-grey-000);}&.k-Tag--dark.k-Tag--disabled{background-color:var(--color-grey-800);color:var(--color-grey-000);}"], pxToRem(24), pxToRem(10), pxToRem(24), TYPOGRAPHY.fontStyles.regular, pxToRem(10), pxToRem(8), pxToRem(5), pxToRem(18), pxToRem(5), pxToRem(8), pxToRem(18));
export var Tag = function Tag(_ref) {
  var type = _ref.type,
      size = _ref.size,
      variant = _ref.variant,
      className = _ref.className,
      flex = _ref.flex,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);
  return /*#__PURE__*/React.createElement(StyledTag, _extends({
    className: classNames('k-Tag', className, "k-Tag--" + type, "k-Tag--" + size, "k-Tag--" + variant, {
      'k-Tag--flex': flex
    })
  }, props), children);
};
Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: PropTypes.oneOf(['small', 'medium']),
  variant: PropTypes.oneOf(['light', 'status', 'dark']),
  flex: PropTypes.bool
};
Tag.defaultProps = {
  type: 'info',
  size: 'medium',
  variant: 'status',
  flex: false
};