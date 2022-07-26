import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { mq } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { LightbulbIllustration as Lightbulb } from '../../../graphics/illustrations/lightbulb-illustration';
import { Loader } from '../../../graphics/animations/loader';
import { getReactElementsWithoutType } from '../../../../helpers/react/get-react-elements';
import { Title as KittenTitle } from '../../../typography/title';
import { SideCard } from './side-card';
import { MobileAside } from './side-modal';
const StyledFlow = styled.div.withConfig({
  displayName: "flow__StyledFlow",
  componentId: "sc-vmfwfw-0"
})(["position:relative;display:flex;flex-direction:column;align-items:stretch;min-height:100%;gap:", ";@media ", "{margin-top:", ";}@media ", "{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:35vw 20vw;gap:", " 5vw;margin-top:", ";}&:not(.k-DashboardLayout__flow--isLoading){.k-DashboardLayout__flow__loading{display:none;}}&.k-DashboardLayout__flow--isLoading{.k-DashboardLayout__flow__content{display:none;}}.k-DashboardLayout__flow__loading,.k-DashboardLayout__flow__content{background-color:", ";@media ", "{padding-top:0;}@media ", "{grid-column:1 / 2;grid-row:2 / span 1;padding-bottom:", ";}}@media ", "{.k-DashboardLayout__flow__title{grid-column:1 / span 1;grid-row:1 / span 1;align-self:center;}.k-DashboardLayout__flow__titleAside{grid-column:2 / span 1;grid-row:1 / span 1;align-self:center;justify-self:end;}}.k-DashboardLayout__flow__nav{flex:0 0 auto;background-color:", ";width:100%;@media ", "{grid-column:1 / 2;grid-row:3 / span 1;bottom:0;position:sticky;z-index:1;width:calc(100% + ", ");padding-inline:", ";margin-inline:", ";&::before{position:absolute;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );content:'';top:", ";left:0;right:0;height:", ";}}}.k-DashboardLayout__flow__nav__actionsContainer{display:grid;grid-template-columns:repeat(2,1fr);gap:", ";margin:", " 0;@media ", "{gap:", ";margin:", " 0 ", ";}& > .k-Button{min-width:0 !important;max-width:", ";width:100%;&:last-child{justify-self:end;}&:first-child:last-child{grid-column:1 / span 2;}}}.k-DashboardLayout__flow__nav:not(.k-DashboardLayout__flow__nav--twoButtons){.k-DashboardLayout__flow__nav__actionsContainer > .k-Button{@media ", "{grid-column:1 / span 2;justify-self:stretch;max-width:100%;}}}.k-DashboardLayout__flow__aside{@media ", "{grid-column:2 / 3;grid-row:2 / span 1;}}.k-DashboardLayout__flow__aside__content{position:sticky;top:calc(", " + var(--dashboardLayout-siteHeaderHeight,0));padding-bottom:", ";svg{margin-bottom:", ";}@media ", "{display:none;}}.k-DashboardLayout__flow__loading{flex:1 0 100%;display:flex;align-items:center;justify-content:center;}"], pxToRem(20), mq.mobileAndTablet, pxToRem(50), mq.desktop, pxToRem(30), pxToRem(80), COLORS.background1, mq.tabletAndDesktop, mq.desktop, pxToRem(20), mq.desktop, COLORS.background1, mq.desktop, pxToRem(30 * 2), pxToRem(30), pxToRem(-30), pxToRem(-20), pxToRem(20), pxToRem(20), pxToRem(20), mq.desktop, pxToRem(40), pxToRem(20), pxToRem(30), pxToRem(180), mq.mobile, mq.desktop, pxToRem(80), pxToRem(40), pxToRem(20), mq.mobileAndTablet);

const Content = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("section", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__content', className)
  }));
};

const Title = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(KittenTitle, _extends({
    noMargin: true
  }, props, {
    className: classNames('k-DashboardLayout__flow__title', className)
  }));
};

const TitleAside = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__titleAside', className)
  }));
};

const Nav = _ref4 => {
  let {
    className,
    children,
    twoButtons = false,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("nav", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__nav', className, {
      'k-DashboardLayout__flow__nav--twoButtons': twoButtons
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__nav__actionsContainer"
  }, children));
};

const Aside = _ref5 => {
  let {
    className,
    children,
    withoutLight = false,
    mobileAsideProps,
    ...props
  } = _ref5;
  return /*#__PURE__*/React.createElement("aside", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__aside', className)
  }), /*#__PURE__*/React.createElement(MobileAside, mobileAsideProps, children), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__aside__content"
  }, !withoutLight && /*#__PURE__*/React.createElement(Lightbulb, null), children));
};

export const Flow = _ref6 => {
  let {
    children,
    className,
    loading,
    loaderComponent,
    ...props
  } = _ref6;
  return /*#__PURE__*/React.createElement(StyledFlow, _extends({
    className: classNames('k-DashboardLayout__flow', className, 'k-DashboardLayout__fullHeight', {
      'k-DashboardLayout__flow--isLoading': loading
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__loading"
  }, !!loaderComponent ? loaderComponent : /*#__PURE__*/React.createElement(Loader, null)), getReactElementsWithoutType({
    children,
    type: 'Aside'
  }));
};
Aside.propTypes = {
  withoutLight: PropTypes.bool,
  mobileAsideProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired
  })
};
Flow.propTypes = {
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node
};
Flow.Title = Title;
Flow.TitleAside = TitleAside;
Flow.Content = Content;
Flow.Nav = Nav;
Flow.Aside = Aside;
Flow.AsideCard = SideCard;