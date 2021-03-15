import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { stepToRem, pxToRem } from '../../../helpers/utils/typography';
var StyledStatus = styled.span.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "db70ps-0"
})(["color:currentColor;display:inline-flex;align-items:center;line-height:1.2;.k-StatusWithBullet__bullet{background-color:currentColor;border-radius:50%;margin-top:", ";}&.k-StatusWithBullet--danger{color:", ";}&.k-StatusWithBullet--success{color:", ";}&.k-StatusWithBullet--warning{color:", ";}&.k-StatusWithBullet--neutral{color:", ";}&.k-StatusWithBullet--normal{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--tiny{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--micro{font-size:", ";.k-StatusWithBullet__bullet{width:", ";height:", ";margin-right:", ";}}&.k-StatusWithBullet--light{", "}&.k-StatusWithBullet--regular{", "}&.k-StatusWithBullet--bold{", "}"], pxToRem(2), COLORS.error, COLORS.valid, COLORS.orange, COLORS.primary1, stepToRem(0), pxToRem(12), pxToRem(12), pxToRem(11), stepToRem(-1), pxToRem(10), pxToRem(10), pxToRem(10), stepToRem(-2), pxToRem(7), pxToRem(7), pxToRem(8), TYPOGRAPHY.fontStyles.light, TYPOGRAPHY.fontStyles.regular, TYPOGRAPHY.fontStyles.bold);
export var StatusWithBullet = function StatusWithBullet(_ref) {
  var statusMessage = _ref.statusMessage,
      statusType = _ref.statusType,
      bulletProps = _ref.bulletProps,
      size = _ref.size,
      className = _ref.className,
      children = _ref.children,
      weight = _ref.weight,
      props = _objectWithoutProperties(_ref, ["statusMessage", "statusType", "bulletProps", "size", "className", "children", "weight"]);

  return /*#__PURE__*/React.createElement(StyledStatus, _extends({
    className: classNames('k-StatusWithBullet', className, "k-StatusWithBullet--".concat(statusType), "k-StatusWithBullet--".concat(size), "k-StatusWithBullet--".concat(weight))
  }, props), /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, bulletProps, {
    className: classNames('k-StatusWithBullet__bullet', bulletProps === null || bulletProps === void 0 ? void 0 : bulletProps.className)
  })), statusMessage || children);
};
StatusWithBullet.propTypes = {
  statusMessage: PropTypes.node,
  statusType: PropTypes.oneOf(['danger', 'success', 'warning', 'neutral', 'none']),
  size: PropTypes.oneOf(['normal', 'tiny', 'micro']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  bulletProps: PropTypes.object
};
StatusWithBullet.defaultProps = {
  statusType: 'success',
  size: 'tiny',
  weight: 'regular',
  bulletProps: {}
};