"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LinkBox = void 0;

require("core-js/modules/es.object.assign.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../../components/graphics/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _excluded = ["className", "href", "isExternal", "variant", "backgroundColor", "textColor", "style"],
    _excluded2 = ["children", "className"],
    _excluded3 = ["children", "className"];

var LinkBox = function LinkBox(_ref) {
  var className = _ref.className,
      href = _ref.href,
      isExternal = _ref.isExternal,
      variant = _ref.variant,
      backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor,
      style = _ref.style,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLinkBox, (0, _extends2.default)({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('k-LinkBox__link', className, "k-LinkBox__link--" + variant),
    style: Object.assign({}, style, {
      '--LinkBox-background-color': backgroundColor,
      '--LinkBox-text-color': textColor
    })
  }, props.children, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    height: "10",
    width: "10"
  }))));
};

exports.LinkBox = LinkBox;

LinkBox.Icon = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LinkBox__textContainer', className)
  }), children);
};

LinkBox.propTypes = {
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  linkProps: _propTypes.default.object,
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  backgroundColor: _propTypes.default.string,
  textColor: _propTypes.default.string
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'andromeda',
  backgroundColor: _colorsConfig.default.background1,
  textColor: null
};