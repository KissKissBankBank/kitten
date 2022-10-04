"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

const LinkBox = _ref => {
  let {
    className,
    href,
    isExternal,
    variant,
    backgroundColor,
    textColor,
    style,
    isSmall,
    ...props
  } = _ref;
  const target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLinkBox, (0, _extends2.default)({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('k-LinkBox__link', className, "k-LinkBox__link--" + variant, {
      'k-LinkBox__link--size-small': isSmall
    }),
    style: { ...style,
      '--LinkBox-background-color': backgroundColor,
      '--LinkBox-text-color': textColor
    }
  }, props.children, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-LinkBox__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    height: "10",
    width: "10"
  }))));
};

exports.LinkBox = LinkBox;

LinkBox.Icon = _ref2 => {
  let {
    children,
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = _ref3 => {
  let {
    children,
    className,
    ...props
  } = _ref3;
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
  textColor: _propTypes.default.string,
  isSmall: _propTypes.default.bool
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false,
  variant: 'orion',
  backgroundColor: _colorsConfig.default.background1,
  textColor: null,
  isSmall: false
};