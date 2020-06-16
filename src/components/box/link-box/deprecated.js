"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecatedLinkBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../components/typography/text");

var _marger = require("../../../components/layout/marger");

var _styles = require("./styles");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _DeprecatedLinkBox$pr;

var DeprecatedLinkBox = function DeprecatedLinkBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      displayIcon = _ref.displayIcon,
      href = _ref.href,
      isExternal = _ref.isExternal,
      linkProps = _ref.linkProps,
      text = _ref.text,
      textTag = _ref.textTag,
      title = _ref.title,
      titleTag = _ref.titleTag,
      viewportIsMobile = _ref.viewportIsMobile;
  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLinkBox, (0, _extends2.default)({}, linkProps, {
    href: href
  }, target, {
    className: className
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LinkBox__link k-LinkBox__link--deprecated"
  }, !!displayIcon && /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-LinkBox__icon', 'k-LinkBox__icon--deprecated', 'k-u-hidden@xs-down--important')
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-LinkBox__textContainer', 'k-LinkBox__textContainer--deprecated', 'k-u-margin-top-double', 'k-u-margin-bottom-double')
  }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    bottom: text ? 0.5 : 0
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: titleTag,
    weight: "regular",
    size: viewportIsMobile ? 'tiny' : 'default',
    color: "font1",
    className: "k-u-line-height-1"
  }, title)), text && /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: textTag,
    weight: "light",
    size: "tiny",
    color: "font1",
    className: "k-u-line-height-1-3"
  }, text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-ButtonIcon__svg"
  }))));
};

exports.DeprecatedLinkBox = DeprecatedLinkBox;
DeprecatedLinkBox.propTypes = (_DeprecatedLinkBox$pr = {
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  linkProps: _propTypes.default.object,
  // deprecated
  displayIcon: (0, _deprecated.default)(_propTypes.default.bool, 'Use `<Linkbox.Icon />` component instead'),
  text: (0, _deprecated.default)(_propTypes.default.string, 'Use `<Linkbox.Text />` component instead')
}, (0, _defineProperty2.default)(_DeprecatedLinkBox$pr, "linkProps", (0, _deprecated.default)(_propTypes.default.node, 'Use direct props instead')), (0, _defineProperty2.default)(_DeprecatedLinkBox$pr, "textTag", (0, _deprecated.default)(_propTypes.default.string, 'Use `<Linkbox.Text />` component instead')), (0, _defineProperty2.default)(_DeprecatedLinkBox$pr, "title", (0, _deprecated.default)(_propTypes.default.string.isRequired, 'Use `<Linkbox.Text />` component instead')), (0, _defineProperty2.default)(_DeprecatedLinkBox$pr, "titleTag", (0, _deprecated.default)(_propTypes.default.string, 'Use `<Linkbox.Text />` component instead')), (0, _defineProperty2.default)(_DeprecatedLinkBox$pr, "viewportIsMobile", (0, _deprecated.default)(_propTypes.default.bool, 'Use media query style in <Linkbox.Text /> component or child instead')), _DeprecatedLinkBox$pr);
DeprecatedLinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  linkProps: {},
  // deprecated
  displayIcon: false,
  text: '',
  textTag: 'span',
  titleTag: 'span',
  viewportIsMobile: false
};