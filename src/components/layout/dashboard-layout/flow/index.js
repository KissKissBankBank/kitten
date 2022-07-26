"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Flow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _lightbulbIllustration = require("../../../graphics/illustrations/lightbulb-illustration");

var _loader = require("../../../graphics/animations/loader");

var _getReactElements = require("../../../../helpers/react/get-react-elements");

var _title = require("../../../typography/title");

var _sideCard = require("./side-card");

var _sideModal = require("./side-modal");

const StyledFlow = _styledComponents.default.div.withConfig({
  displayName: "flow__StyledFlow",
  componentId: "sc-vmfwfw-0"
})(["position:relative;display:flex;flex-direction:column;align-items:stretch;min-height:100%;gap:", ";@media ", "{margin-top:", ";}@media ", "{min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:35vw 20vw;gap:", " 5vw;margin-top:", ";}&:not(.k-DashboardLayout__flow--isLoading){.k-DashboardLayout__flow__loading{display:none;}}&.k-DashboardLayout__flow--isLoading{.k-DashboardLayout__flow__content{display:none;}}.k-DashboardLayout__flow__loading,.k-DashboardLayout__flow__content{background-color:", ";@media ", "{padding-top:0;}@media ", "{grid-column:1 / 2;grid-row:2 / span 1;padding-bottom:", ";}}@media ", "{.k-DashboardLayout__flow__title{grid-column:1 / span 1;grid-row:1 / span 1;align-self:center;}.k-DashboardLayout__flow__titleAside{grid-column:2 / span 1;grid-row:1 / span 1;align-self:center;justify-self:end;}}.k-DashboardLayout__flow__nav{flex:0 0 auto;background-color:", ";width:100%;@media ", "{grid-column:1 / 2;grid-row:3 / span 1;bottom:0;position:sticky;z-index:1;width:calc(100% + ", ");padding-inline:", ";margin-inline:", ";&::before{position:absolute;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );content:'';top:", ";left:0;right:0;height:", ";}}}.k-DashboardLayout__flow__nav__actionsContainer{display:grid;grid-template-columns:repeat(2,1fr);gap:", ";margin:", " 0;@media ", "{gap:", ";margin:", " 0 ", ";}& > .k-Button{min-width:0 !important;max-width:", ";width:100%;&:last-child{justify-self:end;}&:first-child:last-child{grid-column:1 / span 2;}}}.k-DashboardLayout__flow__nav:not(.k-DashboardLayout__flow__nav--twoButtons){.k-DashboardLayout__flow__nav__actionsContainer > .k-Button{@media ", "{grid-column:1 / span 2;justify-self:stretch;max-width:100%;}}}.k-DashboardLayout__flow__aside{@media ", "{grid-column:2 / 3;grid-row:2 / span 1;}}.k-DashboardLayout__flow__aside__content{position:sticky;top:calc(", " + var(--dashboardLayout-siteHeaderHeight,0));padding-bottom:", ";svg{margin-bottom:", ";}@media ", "{display:none;}}.k-DashboardLayout__flow__loading{flex:1 0 100%;display:flex;align-items:center;justify-content:center;}"], (0, _typography.pxToRem)(20), _screenConfig.mq.mobileAndTablet, (0, _typography.pxToRem)(50), _screenConfig.mq.desktop, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(80), _colorsConfig.default.background1, _screenConfig.mq.tabletAndDesktop, _screenConfig.mq.desktop, (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, _colorsConfig.default.background1, _screenConfig.mq.desktop, (0, _typography.pxToRem)(30 * 2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-30), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _screenConfig.mq.desktop, (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(180), _screenConfig.mq.mobile, _screenConfig.mq.desktop, (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), _screenConfig.mq.mobileAndTablet);

const Content = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__content', className)
  }));
};

const Title = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    noMargin: true
  }, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__title', className)
  }));
};

const TitleAside = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__titleAside', className)
  }));
};

const Nav = _ref4 => {
  let {
    className,
    children,
    twoButtons = false,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__nav', className, {
      'k-DashboardLayout__flow__nav--twoButtons': twoButtons
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
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
  return /*#__PURE__*/_react.default.createElement("aside", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__aside', className)
  }), /*#__PURE__*/_react.default.createElement(_sideModal.MobileAside, mobileAsideProps, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__aside__content"
  }, !withoutLight && /*#__PURE__*/_react.default.createElement(_lightbulbIllustration.LightbulbIllustration, null), children));
};

const Flow = _ref6 => {
  let {
    children,
    className,
    loading,
    loaderComponent,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement(StyledFlow, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__flow', className, 'k-DashboardLayout__fullHeight', {
      'k-DashboardLayout__flow--isLoading': loading
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__loading"
  }, !!loaderComponent ? loaderComponent : /*#__PURE__*/_react.default.createElement(_loader.Loader, null)), (0, _getReactElements.getReactElementsWithoutType)({
    children,
    type: 'Aside'
  }));
};

exports.Flow = Flow;
Aside.propTypes = {
  withoutLight: _propTypes.default.bool,
  mobileAsideProps: _propTypes.default.shape({
    openLabel: _propTypes.default.node.isRequired,
    closeLabel: _propTypes.default.node.isRequired
  })
};
Flow.propTypes = {
  loading: _propTypes.default.bool,
  loaderComponent: _propTypes.default.node
};
Flow.Title = Title;
Flow.TitleAside = TitleAside;
Flow.Content = Content;
Flow.Nav = Nav;
Flow.Aside = Aside;
Flow.AsideCard = _sideCard.SideCard;