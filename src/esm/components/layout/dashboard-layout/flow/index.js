import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className", "children", "twoButtons"],
    _excluded5 = ["className", "children", "withoutLight", "mobileAsideProps"],
    _excluded6 = ["children", "className", "loading", "loaderComponent"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { mq } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { LightbulbIllustration as Lightbulb } from '../../../graphics/illustrations/lightbulb-illustration';
import { Loader } from '../../../graphics/animations/loader';
import { getReactElementsWithoutType } from '../../../../helpers/react/react-elements';
import { Title as KittenTitle } from '../../../typography/title';
import { SideCard } from './side-card';
import { MobileAside } from './side-modal';
var StyledFlow = styled.div.withConfig({
  displayName: "flow__StyledFlow",
  componentId: "sc-vmfwfw-0"
})(["position:relative;display:flex;flex-direction:column;align-items:stretch;min-height:100%;gap:", ";@media ", "{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));display:grid;grid-template-rows:1fr auto;grid-template-columns:35vw 20vw;gap:", " 5vw;}&:not(.k-DashboardLayout__flow--isLoading){.k-DashboardLayout__flow__loading{display:none;}}&.k-DashboardLayout__flow--isLoading{.k-DashboardLayout__flow__content{display:none;}}.k-DashboardLayout__flow__loading,.k-DashboardLayout__flow__content{flex:1 0 100%;background-color:", ";padding-bottom:", ";@media ", "{padding-top:0;}@media ", "{grid-column:1 / 2;padding-bottom:", ";}}@media ", "{.k-DashboardLayout__flow__title{grid-column:1 / span 1;align-self:center;}.k-DashboardLayout__flow__titleAside{grid-column:2 / span 1;align-self:center;justify-self:end;}}.k-DashboardLayout__flow__nav{flex:0 0 auto;background-color:", ";width:100%;@media ", "{grid-column:1 / 2;bottom:0;position:sticky;z-index:1;&::before{position:absolute;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );content:'';top:", ";left:0;right:0;height:", ";}}}.k-DashboardLayout__flow__nav__actionsContainer{display:grid;grid-template-columns:repeat(2,1fr);gap:", ";margin:", " 0;@media ", "{gap:", ";margin:", " 0 ", ";}& > .k-Button{min-width:0 !important;max-width:", ";width:100%;&:last-child{justify-self:end;}&:first-child:last-child{grid-column:1 / span 2;}}}.k-DashboardLayout__flow__nav:not(.k-DashboardLayout__flow__nav--twoButtons){.k-DashboardLayout__flow__nav__actionsContainer > .k-Button{@media ", "{grid-column:1 / span 2;justify-self:stretch;max-width:100%;}}}.k-DashboardLayout__flow__aside{@media ", "{grid-column:2 / 3;}}.k-DashboardLayout__flow__aside__content{position:sticky;top:calc(", " + var(--dashboardLayout-siteHeaderHeight,0));padding-bottom:", ";svg{margin-bottom:", ";}@media ", "{display:none;}}.k-DashboardLayout__flow__loading{display:flex;align-items:center;justify-content:center;}"], pxToRem(20), mq.desktop, pxToRem(30), COLORS.background1, pxToRem(30), mq.tabletAndDesktop, mq.desktop, pxToRem(20), mq.desktop, COLORS.background1, mq.desktop, pxToRem(-20), pxToRem(20), pxToRem(20), pxToRem(20), mq.desktop, pxToRem(40), pxToRem(20), pxToRem(30), pxToRem(180), mq.mobile, mq.desktop, pxToRem(80), pxToRem(40), pxToRem(20), mq.mobileAndTablet);

var Content = function Content(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("section", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__content', className)
  }));
};

var Title = function Title(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(KittenTitle, _extends({
    noMargin: true
  }, props, {
    className: classNames('k-DashboardLayout__flow__title', className)
  }));
};

var TitleAside = function TitleAside(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__titleAside', className)
  }));
};

var Nav = function Nav(_ref4) {
  var className = _ref4.className,
      children = _ref4.children,
      _ref4$twoButtons = _ref4.twoButtons,
      twoButtons = _ref4$twoButtons === void 0 ? false : _ref4$twoButtons,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("nav", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__nav', className, {
      'k-DashboardLayout__flow__nav--twoButtons': twoButtons
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__nav__actionsContainer"
  }, children));
};

var Aside = function Aside(_ref5) {
  var className = _ref5.className,
      children = _ref5.children,
      _ref5$withoutLight = _ref5.withoutLight,
      withoutLight = _ref5$withoutLight === void 0 ? false : _ref5$withoutLight,
      mobileAsideProps = _ref5.mobileAsideProps,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("aside", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__aside', className)
  }), /*#__PURE__*/React.createElement(MobileAside, mobileAsideProps, children), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__aside__content"
  }, !withoutLight && /*#__PURE__*/React.createElement(Lightbulb, null), children));
};

export var Flow = function Flow(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      loading = _ref6.loading,
      loaderComponent = _ref6.loaderComponent,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement(StyledFlow, _extends({
    className: classNames('k-DashboardLayout__flow', className, 'k-DashboardLayout__fullHeight', {
      'k-DashboardLayout__flow--isLoading': loading
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__loading"
  }, !!loaderComponent ? loaderComponent : /*#__PURE__*/React.createElement(Loader, null)), getReactElementsWithoutType({
    children: children,
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