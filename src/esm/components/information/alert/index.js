import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose", "icon", "iconBadgeBorderColor", "center"];
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next';
import { IconBadge } from '../../information/icon-badge';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var fadeOut = keyframes(["0%{opacity:1;}100%{opacity:0;}"]);
var AlertWrapper = styled.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-zym1gs-0"
})(["--alert-gap:", ";@media ", "{--alert-gap:", ";}", ";margin:", ";border-radius:var(--border-radius-m);overflow:hidden;background-color:", ";color:", ";display:flex;align-items:center;gap:var(--alert-gap);padding:", " var(--alert-gap);&.k-Alert--hasCloseButton{--alert-close-width:calc(var(--alert-gap) + ", ");}&.k-Alert--hasIcon{--alert-icon-width:calc(var(--alert-gap) + ", ");}&.k-Alert--center{&.k-Alert--hasIcon:not(.k-Alert--hasCloseButton) .k-Alert__text{padding-right:var(--alert-icon-width);}&.k-Alert--hasCloseButton:not(.k-Alert--hasIcon) .k-Alert__text{padding-left:var(--alert-close-width);}&.k-Alert--hasCloseButton.k-Alert--hasIcon .k-Alert__text{padding-right:calc(var(--alert-icon-width) - var(--alert-close-width));}.k-Alert__text{text-align:center;flex-basis:auto;}}.k-Alert__text{flex:1 0 calc(100% - var(--alert-close-width,0px) - var(--alert-icon-width,0px));font-size:", ";line-height:", ";}.k-Alert__icon{.k-Alert__iconBadge{background-color:", ";border-color:", ";min-width:", ";min-height:", ";border-radius:var(--border-radius-rounded);}}.k-Alert__closeButton{flex:0 0 ", ";transition:all 0.2s ease;display:flex;align-self:stretch;align-items:center;margin:", " calc(var(--alert-gap) * -1);padding:", " var(--alert-gap);border-top-right-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);outline-offset:", ";svg,svg path{transition:fill 0.2s ease;fill:", ";:hover{fill:", ";}}}a{", ";color:", ";text-decoration:underline;}&.k-Alert--success{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}.k-Alert__closeButton{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--error{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}.k-Alert__closeButton{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--warning{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}.k-Alert__closeButton{svg,svg path{fill:", ";:hover{fill:'#A47600';}}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], pxToRem(10), mq.tabletAndDesktop, pxToRem(20), TYPOGRAPHY.fontStyles.light, pxToRem(10), COLORS.primary5, COLORS.font1, pxToRem(18), pxToRem(17), pxToRem(30), stepToRem(-1), pxToRem(18), COLORS.primary1, COLORS.primary4, pxToRem(24), pxToRem(24), pxToRem(17), pxToRem(-18), pxToRem(18), pxToRem(-2), COLORS.primary1, COLORS.primary3, TYPOGRAPHY.fontStyles.bold, COLORS.primary1, COLORS.tertiary1, COLORS.valid, COLORS.valid, COLORS.tertiary2, COLORS.valid, COLORS.tertiary2, COLORS.error2, COLORS.error, COLORS.error, COLORS.error3, COLORS.error, COLORS.error4, COLORS.warning2, COLORS.orange3, COLORS.orange3, COLORS.orange, COLORS.warning, fadeOut);
export var Alert = function Alert(_ref) {
  var className = _ref.className,
      show = _ref.show,
      error = _ref.error,
      success = _ref.success,
      warning = _ref.warning,
      closeButton = _ref.closeButton,
      closeButtonLabel = _ref.closeButtonLabel,
      children = _ref.children,
      onAfterClose = _ref.onAfterClose,
      icon = _ref.icon,
      iconBadgeBorderColor = _ref.iconBadgeBorderColor,
      center = _ref.center,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(false),
      isTrashed = _useState[0],
      trashIt = _useState[1];

  var _useState2 = useState(true),
      isMounted = _useState2[0],
      setMounted = _useState2[1];

  var alertRef = useRef(null);
  useEffect(function () {
    var clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(function () {
        trashIt(true);
        onAfterClose();
      }, 400);
    }

    return function () {
      return clearTimeout(clearDelayBeforeTrash);
    };
  }, [isMounted]);
  if (isTrashed || !show) return null;
  return /*#__PURE__*/React.createElement(AlertWrapper, _extends({
    ref: alertRef,
    role: "alert",
    className: classNames('k-Alert', className, {
      'k-Alert--center': center,
      'k-Alert--success': success,
      'k-Alert--error': error,
      'k-Alert--warning': warning,
      'k-Alert--hasCloseButton': !!closeButton,
      'k-Alert--hasIcon': !!icon,
      'k-Alert--shouldHide': !isMounted
    })
  }, others), !!icon && /*#__PURE__*/React.createElement("div", {
    className: "k-Alert__icon"
  }, /*#__PURE__*/React.createElement(IconBadge, {
    className: "k-Alert__iconBadge",
    children: icon,
    border: {
      width: 2,
      color: iconBadgeBorderColor,
      style: 'solid'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-Alert__text"
  }, children), closeButton && /*#__PURE__*/React.createElement("button", {
    className: "k-Alert__closeButton k-u-reset-button"
  }, /*#__PURE__*/React.createElement(CrossIconNext, {
    onClick: function onClick() {
      return setMounted(false);
    },
    title: closeButtonLabel
  })));
};
Alert.propTypes = {
  show: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func,
  icon: PropTypes.node,
  iconBadgeBorderColor: PropTypes.string,
  center: PropTypes.bool
};
Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {},
  icon: null,
  iconBadgeBorderColor: COLORS.primary4,
  center: false
};