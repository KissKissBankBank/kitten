import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CrossIconNext } from '../../../components/graphics/icons-next/cross-icon-next';
import { IconBadge } from '../../../components/atoms/icon-badge';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var fadeOut = keyframes(["0%{opacity:1;}100%{opacity:0;}"]);
var AlertWrapper = styled.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "sc-1nkifwv-0"
})(["", ";margin:", ";border-radius:", ";overflow:hidden;background-color:", ";color:", ";display:flex;[href]{color:", ";}.k-Alert__text{padding:", " ", ";flex:1 0 0;font-size:", ";display:flex;align-items:center;}.k-Alert__iconBadge{margin-right:", ";background-color:", ";border-color:", ";min-width:", ";min-height:", ";border-radius:", ";@media (min-width:", "){margin-right:", ";}}button{display:flex;flex:0 0 auto;transition:all 0.2s ease;align-self:stretch;align-items:center;padding-right:", ";@media (min-width:", "){padding-right:", ";}svg,svg path{transition:fill 0.2s ease;fill:", ";:hover{fill:", ";}}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}a{", ";color:inherit;text-decoration:underline;}&.k-Alert--success{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--error{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:", ";}}}}&.k-Alert--warning{background-color:", ";[href]{color:", ";}.k-Alert__iconBadge{background-color:", ";border-color:", ";}button{svg,svg path{fill:", ";:hover{fill:'#A47600';}}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], TYPOGRAPHY.fontStyles.light, pxToRem(10), pxToRem(8), COLORS.primary5, COLORS.font1, COLORS.primary1, pxToRem(18), pxToRem(20), stepToRem(-1), pxToRem(10), COLORS.primary1, COLORS.primary4, pxToRem(24), pxToRem(24), pxToRem(24), pxToRem(ScreenConfig.S.min), pxToRem(20), pxToRem(10), pxToRem(ScreenConfig.S.min), pxToRem(20), COLORS.primary1, COLORS.primary3, COLORS.background1, pxToRem(2), pxToRem(-4), COLORS.primary4, TYPOGRAPHY.fontStyles.bold, COLORS.tertiary1, COLORS.valid, COLORS.valid, COLORS.tertiary2, COLORS.valid, COLORS.tertiary2, COLORS.error2, COLORS.error, COLORS.error, COLORS.error3, COLORS.error, COLORS.error4, COLORS.warning2, COLORS.orange3, COLORS.orange3, COLORS.orange, COLORS.warning, fadeOut);
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
      others = _objectWithoutProperties(_ref, ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose", "icon", "iconBadgeBorderColor"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isTrashed = _useState2[0],
      trashIt = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isMounted = _useState4[0],
      setMounted = _useState4[1];

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
      'k-Alert--success': success,
      'k-Alert--error': error,
      'k-Alert--warning': warning,
      'k-Alert--hasCloseButton': closeButton,
      'k-Alert--shouldHide': !isMounted
    })
  }, others), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "k-Alert__text"
  }, icon && /*#__PURE__*/React.createElement(IconBadge, {
    className: "k-Alert__iconBadge",
    children: icon,
    border: {
      width: 2,
      color: iconBadgeBorderColor,
      style: 'solid'
    }
  }), children), closeButton && /*#__PURE__*/React.createElement("button", {
    className: "k-u-reset-button"
  }, /*#__PURE__*/React.createElement(CrossIconNext, {
    onClick: function onClick() {
      return setMounted(false);
    },
    title: closeButtonLabel
  }))));
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
  iconBadgeBorderColor: PropTypes.string
};
Alert.defaultProps = {
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {},
  icon: '',
  iconBadgeBorderColor: COLORS.primary4
};