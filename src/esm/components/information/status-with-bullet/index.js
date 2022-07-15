import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["statusMessage", "statusType", "bulletProps", "size", "className", "children", "weight"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { stepToRem, pxToRem } from '../../../helpers/utils/typography';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
var StyledStatus = styled.span.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "sc-jelywm-0"
})(["color:currentColor;display:inline-flex;align-items:center;line-height:1.2;.k-StatusWithBullet__bullet{background-color:currentColor;border-radius:var(--border-radius-rounded);margin-top:", ";flex:0 0 auto;}.k-StatusWithBullet__status{flex:0 1 auto;}&.k-StatusWithBullet--danger{color:", ";}&.k-StatusWithBullet--success{color:", ";}&.k-StatusWithBullet--warning{color:", ";}&.k-StatusWithBullet--neutral{color:", ";}&.k-StatusWithBullet--medium{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--small{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--micro{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--light,&.k-StatusWithBullet--400{", "}&.k-StatusWithBullet--regular,&.k-StatusWithBullet--500{", "}&.k-StatusWithBullet--bold,&.k-StatusWithBullet--700{", "}"], pxToRem(2), COLORS.error, COLORS.valid, COLORS.orange, COLORS.primary1, stepToRem(0), pxToRem(12), pxToRem(12), pxToRem(11), stepToRem(-1), pxToRem(10), pxToRem(10), pxToRem(10), stepToRem(-2), pxToRem(7), pxToRem(7), pxToRem(8), TYPOGRAPHY.fontStyles['400'], TYPOGRAPHY.fontStyles['500'], TYPOGRAPHY.fontStyles['700']);
export var StatusWithBullet = function StatusWithBullet(_ref) {
  var statusMessage = _ref.statusMessage,
      statusType = _ref.statusType,
      bulletProps = _ref.bulletProps,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      weight = _ref.weight,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedWeights(weight);
  return /*#__PURE__*/React.createElement(StyledStatus, _extends({
    className: classNames('k-StatusWithBullet', className, "k-StatusWithBullet--" + statusType, "k-StatusWithBullet--" + size, "k-StatusWithBullet--" + weight)
  }, props), /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, bulletProps, {
    className: classNames('k-StatusWithBullet__bullet', bulletProps == null ? void 0 : bulletProps.className)
  })), /*#__PURE__*/React.createElement("span", {
    className: "k-StatusWithBullet__status"
  }, statusMessage || children));
};
StatusWithBullet.propTypes = {
  statusMessage: PropTypes.node,
  statusType: PropTypes.oneOf(['danger', 'success', 'warning', 'neutral', 'none']),
  size: PropTypes.oneOf(['micro', 'small', 'medium']),
  weight: PropTypes.oneOf(['400', '500', '700']),
  bulletProps: PropTypes.object
};
StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'small',
  weight: '500',
  bulletProps: {}
};