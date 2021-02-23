"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileAside = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = require("../../../../helpers/dom/element-helper");

var _useModal2 = require("../../../../helpers/dom/use-modal");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _crossIcon = require("../../../../components/icons/cross-icon");

var _lightbulbIllustration = require("../../../../components/illustrations/lightbulb-illustration");

var Wrapper = _styledComponents.default.div.withConfig({
  displayName: "side-modal__Wrapper",
  componentId: "qfidgo-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;padding-top:", ";padding-left:", ";padding-right:", ";padding-bottom:", ";z-index:var(--DashboardLayout-modal-zIndex,1000);display:flex;flex-direction:column-reverse;align-items:flex-end;pointer-events:none;@media (min-width:", "){padding:", " ", " ", ";}@media (min-width:", "){display:none;}.k-DashboardLayout__flow__mobileAsideButton{display:flex;align-items:center;justify-content:center;cursor:pointer;flex:0 0 ", ";width:", ";height:", ";background-color:", ";border-radius:100%;box-shadow:", " ", " ", " ", " rgba(0,0,0,0.15);pointer-events:all;border:none;transition:background-color 0.2s ease-in-out;&:focus{outline:", " solid ", ";outline-offset:", ";}@media (min-width:", "){flex:0 0 ", ";width:", ";height:", ";}}.k-DashboardLayout__flow__mobileAsideContent{margin-bottom:", ";pointer-events:all;background-color:", ";padding:", ";border-radius:", ";overflow-y:scroll;opacity:1;transition:opacity 0.2s ease-in-out;@media (min-width:", "){max-width:", ";border-radius:", ";}&[hidden]{opacity:0;display:none;}& > *{max-height:calc(100vh - ", ");@media (min-width:", "){max-height:calc(100vh - ", ");}}}.k-DashboardLayout__flow__mobileAsideBackground{position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;background:", ";opacity:0;transition:opacity 0.2s ease-in-out;pointer-events:inherit;}&.k-DashboardLayout__flow__mobileAside--open{pointer-events:all;.k-DashboardLayout__flow__mobileAsideBackground{opacity:0.8;}.k-DashboardLayout__flow__mobileAsideButton{background-color:", ";}}.k-DashboardLayout__flow__mobileAsideButton__text{clip:rect(0 0 0 0);clip-path:inset(100%);height:", ";overflow:hidden;position:absolute;white-space:nowrap;width:", ";}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(105), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(135), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), _colorsConfig.default.primary5, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(20), _colorsConfig.default.primary5, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(350), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(20 + 105 + 50 + 20 + 2 * 30), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(40 + 135 + 50 + 20 + 2 * 30), _colorsConfig.default.font1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(1), (0, _typography.pxToRem)(1));

var MobileAsideComponent = function MobileAsideComponent(_ref) {
  var children = _ref.children,
      openLabel = _ref.openLabel,
      closeLabel = _ref.closeLabel;

  var _useModal = (0, _useModal2.useModal)({
    id: 'DashboardLayout-sideModal',
    modalCloseText: '1',
    modalOpenText: '2'
  }),
      show = _useModal.show,
      buttonProps = _useModal.buttonProps,
      modalProps = _useModal.modalProps,
      wrapperProps = _useModal.wrapperProps,
      closeAction = _useModal.closeAction;

  return /*#__PURE__*/_react.default.createElement(Wrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-DashboardLayout__flow__mobileAside', {
      'k-DashboardLayout__flow__mobileAside--open': show
    })
  }, wrapperProps), /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: "k-DashboardLayout__flow__mobileAsideButton"
  }, buttonProps), show ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_crossIcon.CrossIcon, {
    color: _colorsConfig.default.background1,
    "aria-hidden": true
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardLayout__flow__mobileAsideButton__text"
  }, closeLabel)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_lightbulbIllustration.LightbulbIllustration, {
    size: "small",
    "aria-hidden": true
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DashboardLayout__flow__mobileAsideButton__text"
  }, openLabel))), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "k-DashboardLayout__flow__mobileAsideContent"
  }, modalProps), children), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-DashboardLayout__flow__mobileAsideBackground",
    onClick: closeAction
  }));
};

var MobileAside = function MobileAside(props) {
  var bodyElement = _elementHelper.domElementHelper.canUseDom() && document.querySelector('#root');
  return bodyElement ? _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(MobileAsideComponent, props), bodyElement) : null;
};

exports.MobileAside = MobileAside;
MobileAsideComponent.propTypes = {
  openLabel: _propTypes.default.node.isRequired,
  closeLabel: _propTypes.default.node.isRequired
};