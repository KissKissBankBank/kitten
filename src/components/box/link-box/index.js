"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../../components/icons/arrow-icon");

var LinkBox = function LinkBox(_ref) {
  var className = _ref.className,
      href = _ref.href,
      isExternal = _ref.isExternal,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "href", "isExternal"]);
  var target = isExternal ? {
    target: '_blank',
    rel: 'noopener'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLinkBox, (0, _extends2.default)({}, props, target, {
    href: href,
    className: className
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LinkBox__link"
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
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LinkBox__icon', className)
  }), children);
};

LinkBox.Text = function (_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-LinkBox__textContainer', className)
  }), children);
};

LinkBox.propTypes = {
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  linkProps: _propTypes.default.object
};
LinkBox.defaultProps = {
  href: '#',
  isExternal: false
};