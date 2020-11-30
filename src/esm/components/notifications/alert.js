import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { CloseButton } from '../../components/buttons/close-button';
import COLORS from '../../constants/colors-config';
import TYPOGRAPHY from '../../constants/typography-config';
import { ScreenConfig } from '../../constants/screen-config';
import { pxToRem, stepToRem } from '../../helpers/utils/typography';
import classNames from 'classnames';
var fadeOut = keyframes(["0%{opacity:1;}100%{opacity:0;}"]);
var AlertWrapper = styled.div.withConfig({
  displayName: "alert__AlertWrapper",
  componentId: "j865fd-0"
})(["", ";position:relative;overflow:hidden;background-color:", ";color:", ";display:flex;align-items:flex-start;.k-Alert__text{padding:", " ", ";flex:1 0 0;font-size:", ";@media (min-width:", "){text-align:center;}}.k-Alert__button{flex:0 0 auto;}a{", ";color:inherit;text-decoration:underline;}&.k-Alert--success{color:", ";background-color:", ";}&.k-Alert--error{color:", ";background-color:", ";}&.k-Alert--warning{color:", ";background-color:", ";}&.k-Alert--hasCloseButton{.k-Alert__text{@media (min-width:", "){margin-left:", ";}}}&.k-Alert--shouldHide{pointer-events:none;animation:", " 0.4s cubic-bezier(0.895,0.03,0.685,0.22) forwards;}"], TYPOGRAPHY.fontStyles.light, COLORS.primary5, COLORS.primary1, pxToRem(13), pxToRem(20), stepToRem(-1), pxToRem(ScreenConfig.S.min), TYPOGRAPHY.fontStyles.bold, COLORS.valid, COLORS.tertiary1, COLORS.error, COLORS.error2, COLORS.warning, COLORS.warning2, pxToRem(ScreenConfig.S.min), pxToRem(50), fadeOut);
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
      others = _objectWithoutProperties(_ref, ["className", "show", "error", "success", "warning", "closeButton", "closeButtonLabel", "children", "onAfterClose"]);

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
  }, children), closeButton && /*#__PURE__*/React.createElement(CloseButton, {
    modifier: "carbon",
    closeButtonLabel: closeButtonLabel,
    className: "k-Alert__button",
    onClick: function onClick() {
      return setMounted(false);
    }
  })));
};
Alert.propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  closeButton: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onAfterClose: PropTypes.func
};
Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  warning: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {}
};