import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { domElementHelper } from '../../../../helpers/dom/element-helper';
import { useModal } from '../../../../helpers/hooks/use-modal';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { LightbulbIllustration as Lightbulb } from '../../../graphics/illustrations/lightbulb-illustration';
import { DASHBOARD_HIDE_CONTENT_EVENT, DASHBOARD_SHOW_CONTENT_EVENT } from '../../../../helpers/dom/events';
const Wrapper = styled.div.withConfig({
  displayName: "side-modal__Wrapper",
  componentId: "sc-qfidgo-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;padding-top:", ";padding-left:", ";padding-right:", ";padding-bottom:", ";z-index:var(--DashboardLayout-modal-zIndex,1000);display:flex;flex-direction:column-reverse;align-items:flex-end;pointer-events:none;&.k-DashboardLayout__flow--hideButtonAndModal{display:none;}@media (min-width:", "){padding:", " ", " ", ";}@media (min-width:", "){display:none;}.k-DashboardLayout__flow__mobileAsideButton{display:flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 ", ";width:", ";height:", ";background-color:", ";border-radius:var(--border-radius-rounded);box-shadow:", " ", " ", " ", " rgba(0,0,0,0.15);pointer-events:all;border:none;transition:background-color 0.2s ease-in-out;@media (min-width:", "){flex:0 0 ", ";width:", ";height:", ";}}.k-DashboardLayout__flow__mobileAsideContent{margin-bottom:", ";pointer-events:all;background-color:", ";padding:", ";border-radius:var(--border-radius-s);overflow-y:scroll;opacity:1;transition:opacity 0.2s ease-in-out;@media (min-width:", "){max-width:", ";}&[hidden]{opacity:0;display:none;}& > *{max-height:calc(100vh - ", ");@media (min-width:", "){max-height:calc(100vh - ", ");}}}.k-DashboardLayout__flow__mobileAsideBackground{position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background:", ";opacity:0;transition:opacity 0.2s ease-in-out;pointer-events:inherit;}&.k-DashboardLayout__flow__mobileAside--open{pointer-events:all;.k-DashboardLayout__flow__mobileAsideBackground{opacity:0.8;}.k-DashboardLayout__flow__mobileAsideButton{background-color:", ";}}.k-DashboardLayout__flow__mobileAsideButton__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}"], pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(105), pxToRem(ScreenConfig.S.min), pxToRem(40), pxToRem(40), pxToRem(135), pxToRem(ScreenConfig.L.min), pxToRem(50), pxToRem(50), pxToRem(50), COLORS.primary5, pxToRem(0), pxToRem(2), pxToRem(5), pxToRem(5), pxToRem(ScreenConfig.S.min), pxToRem(70), pxToRem(70), pxToRem(70), pxToRem(20), COLORS.primary5, pxToRem(30), pxToRem(ScreenConfig.S.min), pxToRem(350), pxToRem(20 + 105 + 50 + 20 + 2 * 30), pxToRem(ScreenConfig.S.min), pxToRem(40 + 135 + 50 + 20 + 2 * 30), COLORS.font1, COLORS.primary1, pxToRem(1), pxToRem(1));

const MobileAsideComponent = _ref => {
  let {
    children,
    openLabel,
    closeLabel
  } = _ref;
  const [shouldHideButton, setButtonAsHidden] = useState(false);
  useEffect(() => {
    if (!domElementHelper.canUseDom()) return;
    window.addEventListener(DASHBOARD_HIDE_CONTENT_EVENT, hideButton);
    window.addEventListener(DASHBOARD_SHOW_CONTENT_EVENT, showButton);
    return () => {
      window.removeEventListener(DASHBOARD_HIDE_CONTENT_EVENT, hideButton);
      window.removeEventListener(DASHBOARD_SHOW_CONTENT_EVENT, showButton);
    };
  }, []);

  const hideButton = () => {
    setButtonAsHidden(true);
  };

  const showButton = () => {
    setButtonAsHidden(false);
  };

  const {
    show,
    buttonProps,
    modalProps,
    wrapperProps,
    closeAction
  } = useModal({
    id: 'DashboardLayout-sideModal',
    modalCloseText: '1',
    modalOpenText: '2'
  });
  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    className: classNames('k-DashboardLayout__flow__mobileAside', {
      'k-DashboardLayout__flow--hideButtonAndModal': shouldHideButton,
      'k-DashboardLayout__flow__mobileAside--open': show
    })
  }, wrapperProps), /*#__PURE__*/React.createElement("button", _extends({
    className: "k-DashboardLayout__flow__mobileAsideButton"
  }, buttonProps), show ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CrossIcon, {
    color: COLORS.background1,
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardLayout__flow__mobileAsideButton__text"
  }, closeLabel)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Lightbulb, {
    size: "small",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardLayout__flow__mobileAsideButton__text"
  }, openLabel))), /*#__PURE__*/React.createElement("div", _extends({
    className: "k-DashboardLayout__flow__mobileAsideContent"
  }, modalProps), children), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__mobileAsideBackground",
    onClick: closeAction
  }));
};

export const MobileAside = props => {
  const bodyElement = domElementHelper.canUseDom() && document.querySelector('#root');
  return bodyElement ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(MobileAsideComponent, props), bodyElement) : null;
};
MobileAsideComponent.propTypes = {
  openLabel: PropTypes.node.isRequired,
  closeLabel: PropTypes.node.isRequired
};