"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickAccessLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var StyledQuickNav = _styledComponents.default.a.withConfig({
  displayName: "quick-access-link__StyledQuickNav",
  componentId: "sc-88k1zh-0"
})(["position:absolute;display:inline-flex;align-items:center;left:-100%;top:0;z-index:", ";padding:0 ", ";background-color:", ";border-right:", " solid ", ";", " color:", ";line-height:1;font-size:", ";text-decoration:none;transition:all .2s ease;transition-delay:0,0;opacity:0;&:focus,&:active{left:0;opacity:1;transition-delay:0,.2s;outline:", " auto -webkit-focus-ring-color;}"], function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex;
}, (0, _typography.pxToRem)(30), _colorsConfig.default.background1, (0, _typography.pxToRem)(1), _colorsConfig.default.line1, _typographyConfig.default.fontStyles.regular, _colorsConfig.default.font1, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(5));

var QuickAccessLink = function QuickAccessLink(_ref2) {
  var text = _ref2.text,
      href = _ref2.href,
      zIndex = _ref2.zIndex,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["text", "href", "zIndex"]);
  return /*#__PURE__*/_react.default.createElement(StyledQuickNav, (0, _extends2.default)({}, props, {
    href: href,
    zIndex: zIndex
  }), text);
};

exports.QuickAccessLink = QuickAccessLink;
QuickAccessLink.propTypes = {
  text: _propTypes.default.node,
  href: _propTypes.default.string,
  zIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
QuickAccessLink.defaultProps = {
  text: 'Aller au contenu',
  href: '#main',
  zIndex: 2
};