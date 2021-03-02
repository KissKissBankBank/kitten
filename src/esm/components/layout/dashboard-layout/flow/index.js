import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke';
import { LightbulbIllustration as Lightbulb } from '../../../../components/illustrations/lightbulb-illustration';
import { Loader } from '../../../../components/atoms/loader';
import { getReactElementsWithoutType } from '../../../../helpers/react/react-elements';
import { useFlexGapCheck } from '../../../../helpers/dom/use-flex-gap-check';
import { SideCard } from './side-card';
import { MobileAside } from './side-modal';
var StyledFlow = styled.div.withConfig({
  displayName: "flow__StyledFlow",
  componentId: "vmfwfw-0"
})(["position:relative;display:flex;flex-direction:column;align-items:stretch;min-height:100%;@media (min-width:", "){min-height:100vh;display:grid;grid-template-rows:1fr auto;grid-template-columns:4fr 3fr;gap:0 calc(100% * 4 / 3 * 0.1);}&:not(.k-DashboardLayout__flow--isLoading){.k-DashboardLayout__flow__loading{display:none;}}&.k-DashboardLayout__flow--isLoading{.k-DashboardLayout__flow__content{display:none;}}.k-DashboardLayout__flow__loading,.k-DashboardLayout__flow__content{flex:1 0 100%;background-color:", ";padding-top:", ";padding-bottom:", ";@media (min-width:", "){padding-top:", ";}@media (min-width:", "){grid-column:1 / 2;padding-bottom:", ";}}.k-DashboardLayout__flow__nav{flex:0 0 auto;background-color:", ";width:100%;@media (min-width:", "){grid-column:1 / 2;bottom:0;position:sticky;z-index:1;}}.k-DashboardLayout__flow__nav__actionsContainer{display:flex;align-items:center;justify-content:space-between;gap:", ";margin:", " 0;@media (min-width:", "){gap:", ";margin:", " 0;}> *{min-width:0;max-width:", ";flex:1 1 ", ";}}.k-DashboardLayout__flow__aside{@media (min-width:", "){grid-column:2 / 3;}}.k-DashboardLayout__flow__aside__content{position:sticky;top:", ";padding-bottom:", ";svg{margin-bottom:", ";}@media (max-width:", "){display:none;}}.k-DashboardLayout__flow__loading{display:flex;align-items:center;justify-content:center;}&.k-DashboardLayout__flow--noGap{.k-DashboardLayout__flow__nav__actionsContainer >:not(:last-child){margin-right:", ";@media (min-width:", "){margin-right:", ";}}}"], pxToRem(ScreenConfig.L.min), COLORS.background1, pxToRem(50), pxToRem(50), pxToRem(ScreenConfig.S.min), pxToRem(80), pxToRem(ScreenConfig.L.min), pxToRem(20), COLORS.background1, pxToRem(ScreenConfig.L.min), pxToRem(20), pxToRem(20), pxToRem(ScreenConfig.L.min), pxToRem(40), pxToRem(30), pxToRem(180), pxToRem(180), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(40), pxToRem(20), pxToRem(ScreenConfig.M.max), pxToRem(20), pxToRem(ScreenConfig.L.min), pxToRem(40));

var Content = function Content(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement("section", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__content', className)
  }));
};

var Nav = function Nav(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  return /*#__PURE__*/React.createElement("nav", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__nav', className)
  }), /*#__PURE__*/React.createElement(HorizontalStroke, {
    size: "tiny",
    customSize: {
      width: '100%'
    },
    color: COLORS.line1
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__nav__actionsContainer"
  }, children));
};

var Aside = function Aside(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      _ref3$withoutLight = _ref3.withoutLight,
      withoutLight = _ref3$withoutLight === void 0 ? false : _ref3$withoutLight,
      mobileAsideProps = _ref3.mobileAsideProps,
      props = _objectWithoutProperties(_ref3, ["className", "children", "withoutLight", "mobileAsideProps"]);

  return /*#__PURE__*/React.createElement("aside", _extends({}, props, {
    className: classNames('k-DashboardLayout__flow__aside', className)
  }), /*#__PURE__*/React.createElement(MobileAside, mobileAsideProps, children), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardLayout__flow__aside__content"
  }, !withoutLight && /*#__PURE__*/React.createElement(Lightbulb, null), children));
};

export var Flow = function Flow(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      loading = _ref4.loading,
      loaderComponent = _ref4.loaderComponent,
      props = _objectWithoutProperties(_ref4, ["children", "className", "loading", "loaderComponent"]);

  var canUseGap = useFlexGapCheck();
  return /*#__PURE__*/React.createElement(StyledFlow, _extends({
    className: classNames('k-DashboardLayout__flow', className, 'k-DashboardLayout__fullHeight', {
      'k-DashboardLayout__flow--isLoading': loading,
      'k-DashboardLayout__flow--noGap': !canUseGap
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
Flow.Content = Content;
Flow.Nav = Nav;
Flow.Aside = Aside;
Flow.AsideCard = SideCard;