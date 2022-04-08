"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MessagesMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["className", "children"],
    _excluded2 = ["className", "children", "status", "active", "onClick", "avatarProps"];

var StyledMessagesMenu = _styledComponents.default.ul.withConfig({
  displayName: "messages-menu__StyledMessagesMenu",
  componentId: "sc-1riahy-0"
})(["display:flex;flex-direction:column;gap:", ";list-style:none;margin:0;padding:0;overflow:scroll;height:100%;margin-left:", ";padding-left:", ";.k-MessagesMenu__message{position:relative;margin:0;padding:0;}.k-MessagesMenu__message--unread .k-MessagesMenu__message__button{background-color:var(--color-primary-100);}.k-MessagesMenu__message--active .k-MessagesMenu__message__button{background-color:var(--color-grey-300);}.k-MessagesMenu__message__button:hover,.k-MessagesMenu__message__button:active{background-color:var(--color-grey-200);}.k-MessagesMenu__message__button{display:flex;gap:", ";align-items:center;height:", ";padding-block:", ";padding-inline:", " ", ";transition:background-color var(--transition);border-radius:var(--border-radius-m);outline-offset:", ";}.k-MessagesMenu__message__avatar{flex:0 0 ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-MessagesMenu__message--unread{&::before{content:'';position:absolute;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:var(--color-primary-500);top:calc(50% - ", ");left:", ";}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(-3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(55), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(-3));

var MessagesMenu = function MessagesMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledMessagesMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-MessagesMenu', className)
  }, props), children);
};

exports.MessagesMenu = MessagesMenu;

MessagesMenu.Message = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      _ref2$status = _ref2.status,
      status = _ref2$status === void 0 ? 'read' : _ref2$status,
      active = _ref2.active,
      onClick = _ref2.onClick,
      avatarProps = _ref2.avatarProps,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    className: (0, _classnames.default)('k-MessagesMenu__message', className, "k-MessagesMenu__message--" + status, {
      'k-MessagesMenu__message--active': active
    })
  }, props), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-MessagesMenu__message__button",
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    alt: ""
  }, avatarProps, {
    className: (0, _classnames.default)('k-MessagesMenu__message__avatar', avatarProps.className)
  })), /*#__PURE__*/_react.default.createElement("div", null, children)));
};

MessagesMenu.Message.propTypes = {
  status: _propTypes.default.oneOf(['active', 'read', 'unread'])
};