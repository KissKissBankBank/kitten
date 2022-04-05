import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "icon", "status", "displayIcon", "iconPosition", "size", "fit"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StatusIconNext } from '../../graphics/icons-next/status-icon-next';
import { IconBadge } from '../../information/icon-badge';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
import classNames from 'classnames';
var AlertBoxWrapper = styled.div.withConfig({
  displayName: "alert-box__AlertBoxWrapper",
  componentId: "sc-225a7x-0"
})(["", ";border-radius:var(--border-radius-s,", ");overflow:hidden;background-color:", ";color:", ";gap:var(--alertBox-gap);padding:", " var(--alertBox-gap);&.k-AlertBox--content{display:inline-flex;}&.k-AlertBox--fluid{display:flex;}&.k-AlertBox--icon-start{align-items:flex-start;}&.k-AlertBox--icon-center{align-items:center;}.k-AlertBox__icon{flex:0 0 auto;border-radius:var(--border-radius-rounded,", ");}.k-AlertBox__text{flex:1 1 auto;font-size:", ";line-height:", ";}&.k-AlertBox--normal,&.k-AlertBox--medium{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--big,&.k-AlertBox--large{gap:", ";padding:", ";.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}&.k-AlertBox--small{gap:", ";padding:", ";.k-AlertBox__text{font-size:", ";line-height:", ";}.k-AlertBox__icon{width:", ";height:", ";flex-basis:", ";}}.k-u-link,a{", ";text-decoration:none;}&.k-AlertBox--info{background-color:var(--color-primary-100);.k-u-link,a{color:var(--color-primary-500);}}&.k-AlertBox--success{background-color:var(--color-success-100);.k-u-link,a{color:var(--color-success-500);}}&.k-AlertBox--danger{background-color:var(--color-danger-100);.k-u-link,a{color:var(--color-danger-500);}}&.k-AlertBox--warning{background-color:var(--color-warning-100);.k-u-link,a{color:var(--color-warning-500);}}&.k-AlertBox--pending{background-color:var(--color-grey-300);.k-u-link,a{color:var(--color-primary-500);}}&.k-AlertBox--disabled{background-color:var(--color-grey-200);.k-u-link,a{color:var(--color-grey-600);}}"], TYPOGRAPHY.fontStyles.light, pxToRem(6), COLORS.primary5, COLORS.font1, pxToRem(18), pxToRem(9999), pxToRem(14), pxToRem(18), pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(5), pxToRem(5), pxToRem(12), pxToRem(15), pxToRem(16), pxToRem(16), pxToRem(16), TYPOGRAPHY.fontStyles.bold);
export var AlertBox = function AlertBox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      status = _ref.status,
      displayIcon = _ref.displayIcon,
      iconPosition = _ref.iconPosition,
      size = _ref.size,
      fit = _ref.fit,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);

  var internalIcon = function () {
    if (icon) return icon;
    return /*#__PURE__*/React.createElement(StatusIconNext, {
      status: status
    });
  }();

  var role = function () {
    switch (status) {
      case 'danger':
        return 'alert';

      case 'warning':
      case 'success':
        return 'status';

      default:
        return null;
    }
  }();

  var iconSize = function () {
    switch (size) {
      case 'large':
      case 'big':
        return 'medium';

      case 'medium':
      case 'normal':
        return 'small';

      case 'small':
        return 'micro';
    }
  }();

  return /*#__PURE__*/React.createElement(AlertBoxWrapper, _extends({
    role: role,
    className: classNames('k-AlertBox', className, "k-AlertBox--" + status, "k-AlertBox--" + size, "k-AlertBox--" + fit, "k-AlertBox--icon-" + iconPosition, {
      'k-AlertBox--hasIcon': displayIcon
    })
  }, others), displayIcon && /*#__PURE__*/React.createElement(IconBadge, {
    className: "k-AlertBox__icon",
    children: internalIcon,
    status: status,
    size: iconSize
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-AlertBox__text"
  }, children));
};
AlertBox.propTypes = {
  status: PropTypes.oneOf(['info', 'success', 'danger', 'warning', 'disabled', 'pending']),
  displayIcon: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['start', 'center']),
  icon: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fit: PropTypes.oneOf(['content', 'fluid'])
};
AlertBox.defaultProps = {
  status: 'info',
  displayIcon: true,
  icon: null,
  size: 'medium',
  fit: 'fluid',
  iconPosition: 'start'
};