import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { StatusIconNext } from '../../graphics/icons-next/status-icon-next';
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next';
import { IconBadge } from '../../information/icon-badge';
import TYPOGRAPHY from '../../../constants/typography-config';
import { mq } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
const fadeOut = keyframes(["0%{opacity:1;}100%{opacity:0;}"]);
const AlertWrapper = styled.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-zym1gs-0"
})(["--alert-gap:", ";@media ", "{--alert-gap:", ";}", ";margin:", ";border-radius:var(--border-radius-m);overflow:hidden;color:var(--color-grey-900);display:flex;align-items:center;gap:var(--alert-gap);padding:", " var(--alert-gap);background-color:var(--color-primary-100);[href]{color:var(--color-primary-500);}.k-Alert__closeButton{svg,svg path{fill:var(--color-primary-500);:hover{fill:var(--color-primary-700);}}}&.k-Alert--hasCloseButton{--alert-close-width:calc(var(--alert-gap) + ", ");}&.k-Alert--hasIcon{--alert-icon-width:calc(var(--alert-gap) + ", ");}&.k-Alert--center{&.k-Alert--hasIcon:not(.k-Alert--hasCloseButton) .k-Alert__text{padding-right:var(--alert-icon-width);}&.k-Alert--hasCloseButton:not(.k-Alert--hasIcon) .k-Alert__text{padding-left:var(--alert-close-width);}&.k-Alert--hasCloseButton.k-Alert--hasIcon .k-Alert__text{padding-right:calc(var(--alert-icon-width) - var(--alert-close-width));}.k-Alert__text{text-align:center;flex-basis:auto;}}.k-Alert__text{flex:1 0 calc(100% - var(--alert-close-width,0px) - var(--alert-icon-width,0px));font-size:", ";line-height:", ";}.k-Alert__iconBadge{min-width:", ";min-height:", ";}.k-Alert__closeButton{flex:0 0 ", ";transition:all 0.2s ease;display:flex;align-self:stretch;align-items:center;margin:", " calc(var(--alert-gap) * -1);padding:", " var(--alert-gap);border-top-right-radius:var(--border-radius-m);border-bottom-right-radius:var(--border-radius-m);outline-offset:", ";svg,svg path{transition:fill 0.2s ease;fill:var(--color-primary-500);:hover{fill:var(--color-primary-700);}}}a{", ";color:var(--color-primary-500);text-decoration:underline;}&.k-Alert--success{background-color:var(--color-success-100);[href]{color:var(--color-success-500);}.k-Alert__closeButton{svg,svg path{fill:var(--color-success-500);:hover{fill:var(--color-success-700);}}}}&.k-Alert--news{background-color:var(--color-news-100);[href]{color:var(--color-news-500);}.k-Alert__closeButton{svg,svg path{fill:var(--color-news-500);:hover{fill:var(--color-news-700);}}}}&.k-Alert--danger{background-color:var(--color-danger-100);[href]{color:var(--color-danger-500);}.k-Alert__closeButton{svg,svg path{fill:var(--color-danger-500);:hover{fill:var(--color-danger-700);}}}}&.k-Alert--warning{background-color:var(--color-warning-100);[href]{color:var(--color-warning-500);}.k-Alert__closeButton{svg,svg path{fill:var(--color-warning-500);:hover{fill:var(--color-warning-700);}}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], pxToRem(10), mq.tabletAndDesktop, pxToRem(20), TYPOGRAPHY.fontStyles['400'], pxToRem(10), pxToRem(18), pxToRem(17), pxToRem(30), stepToRem(-1), pxToRem(18), pxToRem(20), pxToRem(20), pxToRem(17), pxToRem(-18), pxToRem(18), pxToRem(-2), TYPOGRAPHY.fontStyles['700'], fadeOut);
export const Alert = _ref => {
  let {
    className,
    show,
    closeButton,
    closeButtonLabel,
    children,
    onAfterClose,
    icon,
    center,
    status,
    iconHasBorder,
    displayIcon,
    ...others
  } = _ref;
  const [isTrashed, trashIt] = useState(false);
  const [isMounted, setMounted] = useState(true);
  const alertRef = useRef(null);
  useEffect(() => {
    let clearDelayBeforeTrash;

    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(() => {
        trashIt(true);
        onAfterClose();
      }, 400);
    }

    return () => clearTimeout(clearDelayBeforeTrash);
  }, [isMounted]);
  if (isTrashed || !show) return null;
  const internalIcon = icon || /*#__PURE__*/React.createElement(StatusIconNext, {
    status: status
  });

  const role = (() => {
    switch (status) {
      case 'danger':
        return 'alert';

      case 'warning':
      case 'news':
      case 'success':
        return 'status';

      default:
        return null;
    }
  })();

  return /*#__PURE__*/React.createElement(AlertWrapper, _extends({
    ref: alertRef,
    role: role,
    className: classNames('k-Alert', className, "k-Alert--" + status, {
      'k-Alert--center': center,
      'k-Alert--hasCloseButton': !!closeButton,
      'k-Alert--hasIcon': !!icon || displayIcon,
      'k-Alert--shouldHide': !isMounted
    })
  }, others), displayIcon && /*#__PURE__*/React.createElement(IconBadge, {
    className: "k-Alert__iconBadge",
    children: internalIcon,
    status: status,
    hasBorder: iconHasBorder
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-Alert__text"
  }, children), closeButton && /*#__PURE__*/React.createElement("button", {
    onClick: () => setMounted(false),
    className: "k-Alert__closeButton k-u-reset-button",
    title: closeButtonLabel,
    "aria-label": closeButtonLabel
  }, /*#__PURE__*/React.createElement(CrossIconNext, null)));
};
Alert.propTypes = {
  show: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func,
  icon: PropTypes.node,
  center: PropTypes.bool,
  displayIcon: PropTypes.bool,
  iconHasBorder: PropTypes.bool,
  status: PropTypes.oneOf(['info', 'warning', 'success', 'danger', 'news'])
};
Alert.defaultProps = {
  show: true,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
  icon: null,
  center: false,
  displayIcon: true,
  iconHasBorder: true,
  status: 'info'
};