"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flow = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _lightbulbIllustration = require("../../../../components/graphics/illustrations/lightbulb-illustration");

var _loader = require("../../../../components/atoms/loader");

var _reactElements = require("../../../../helpers/react/react-elements");

var _sideCard = require("./side-card");

var _sideModal = require("./side-modal");

var StyledFlow = _styledComponents.default.div.withConfig({
  displayName: "flow__StyledFlow",
  componentId: "vmfwfw-0"
})(["position:relative;display:flex;flex-direction:column;align-items:stretch;min-height:100%;@media (min-width:", "){min-height:calc(100vh - var(--dashboardLayout-siteHeaderHeight));display:grid;grid-template-rows:1fr auto;grid-template-columns:35vw 20vw;gap:0 5vw;}&:not(.k-DashboardLayout__flow--isLoading){.k-DashboardLayout__flow__loading{display:none;}}&.k-DashboardLayout__flow--isLoading{.k-DashboardLayout__flow__content{display:none;}}.k-DashboardLayout__flow__loading,.k-DashboardLayout__flow__content{flex:1 0 100%;background-color:", ";padding-top:", ";padding-bottom:", ";@media (min-width:", "){padding-top:", ";}@media (min-width:", "){grid-column:1 / 2;padding-bottom:", ";}}.k-DashboardLayout__flow__nav{flex:0 0 auto;background-color:", ";width:100%;@media (min-width:", "){grid-column:1 / 2;bottom:0;position:sticky;z-index:1;&::before{position:absolute;background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) );content:'';top:", ";left:0;right:0;height:", ";}}}.k-DashboardLayout__flow__nav__actionsContainer{display:grid;grid-template-columns:repeat(2,1fr);gap:", ";margin:", " 0;@media (min-width:", "){gap:", ";margin:", " 0 ", ";}& > .k-Button{min-width:0 !important;max-width:", ";width:100%;&:last-child{justify-self:end;}&:first-child:last-child{grid-column:1 / span 2;}}}.k-DashboardLayout__flow__nav:not(.k-DashboardLayout__flow__nav--twoButtons){.k-DashboardLayout__flow__nav__actionsContainer > .k-Button{@media (max-width:", "){grid-column:1 / span 2;justify-self:stretch;max-width:100%;}}}.k-DashboardLayout__flow__aside{@media (min-width:", "){grid-column:2 / 3;}}.k-DashboardLayout__flow__aside__content{position:sticky;top:calc(", " + var(--dashboardLayout-siteHeaderHeight,0));padding-bottom:", ";svg{margin-bottom:", ";}@media (max-width:", "){display:none;}}.k-DashboardLayout__flow__loading{display:flex;align-items:center;justify-content:center;}"], (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), _colorsConfig.default.background1, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(-20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(180), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.XS.max), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max));

var Content = function Content(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__content', className)
  }));
};

var Nav = function Nav(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      _ref2$twoButtons = _ref2.twoButtons,
      twoButtons = _ref2$twoButtons === void 0 ? false : _ref2$twoButtons,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "children", "twoButtons"]);
  return /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__nav', className, {
      'k-DashboardLayout__flow__nav--twoButtons': twoButtons
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__nav__actionsContainer"
  }, children));
};

var Aside = function Aside(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      _ref3$withoutLight = _ref3.withoutLight,
      withoutLight = _ref3$withoutLight === void 0 ? false : _ref3$withoutLight,
      mobileAsideProps = _ref3.mobileAsideProps,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className", "children", "withoutLight", "mobileAsideProps"]);
  return /*#__PURE__*/_react.default.createElement("aside", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-DashboardLayout__flow__aside', className)
  }), /*#__PURE__*/_react.default.createElement(_sideModal.MobileAside, mobileAsideProps, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__aside__content"
  }, !withoutLight && /*#__PURE__*/_react.default.createElement(_lightbulbIllustration.LightbulbIllustration, null), children));
};

var Flow = function Flow(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      loading = _ref4.loading,
      loaderComponent = _ref4.loaderComponent,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["children", "className", "loading", "loaderComponent"]);
  return /*#__PURE__*/_react.default.createElement(StyledFlow, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__flow', className, 'k-DashboardLayout__fullHeight', {
      'k-DashboardLayout__flow--isLoading': loading
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__loading"
  }, !!loaderComponent ? loaderComponent : /*#__PURE__*/_react.default.createElement(_loader.Loader, null)), (0, _reactElements.getReactElementsWithoutType)({
    children: children,
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
Flow.Content = Content;
Flow.Nav = Nav;
Flow.Aside = Aside;
Flow.AsideCard = _sideCard.SideCard;