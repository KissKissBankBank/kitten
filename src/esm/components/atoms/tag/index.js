import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type", "size", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledTag = styled.span.withConfig({
  displayName: "tag__StyledTag",
  componentId: "sc-1dt82ne-0"
})(["height:", ";box-sizing:border-box;display:inline-block;padding:0 ", ";white-space:nowrap;line-height:", ";", " font-size:", ";border-radius:var(--border-radius-xs);&.k-Tag--info{background-color:var(--color-primary-100);color:var(--color-primary-700);}&.k-Tag--warning{background-color:var(--color-warning-100);color:var(--color-warning-700);}&.k-Tag--success{background-color:var(--color-success-100);color:var(--color-success-700);}&.k-Tag--error{background-color:var(--color-danger-100);color:var(--color-danger-700);}&.k-Tag--disabled{background-color:var(--color-grey-100);color:var(--color-grey-700);}&.k-Tag--small{height:", ";padding:0 ", ";font-size:", ";line-height:", ";}"], pxToRem(30), pxToRem(10), pxToRem(30), TYPOGRAPHY.fontStyles.regular, pxToRem(14), pxToRem(20), pxToRem(5), pxToRem(10), pxToRem(20));
export var Tag = function Tag(_ref) {
  var type = _ref.type,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledTag, _extends({
    className: classNames('k-Tag', className, "k-Tag--" + type, "k-Tag--" + size)
  }, props));
};
Tag.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error', 'disabled']),
  size: PropTypes.oneOf(['regular', 'small'])
};
Tag.defaultProps = {
  type: 'info',
  size: 'regular'
};