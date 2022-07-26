"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MessagesMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _button = require("../../../components/action/button");

var _crossIconNext = require("../../../components/graphics/icons-next/cross-icon-next");

const StyledMessagesMenu = _styledComponents.default.ul.withConfig({
  displayName: "messages-menu__StyledMessagesMenu",
  componentId: "sc-1riahy-0"
})(["display:flex;flex-direction:column;gap:", ";list-style:none;margin:0;padding:0;overflow:scroll;height:100%;margin-left:", ";padding-left:", ";.k-MessagesMenu__message{overflow:hidden;position:relative;flex:0 0 auto;margin:0;padding:0;display:flex;gap:", ";align-items:center;margin-left:", ";padding-left:", ";transition:width var(--transition);}.k-MessagesMenu__message--unread .k-MessagesMenu__message__button{background-color:var(--color-primary-100);}.k-MessagesMenu__message--active .k-MessagesMenu__message__button{background-color:var(--color-grey-300);}.k-MessagesMenu__message__button:hover,.k-MessagesMenu__message__button:active{background-color:var(--color-grey-200);}.k-MessagesMenu__message__button{display:flex;flex:1 0 calc(100% - ", ");gap:", ";align-items:center;height:", ";padding-block:", ";padding-inline:", " ", ";transition:background-color var(--transition);border-radius:var(--border-radius-m);outline-offset:", ";}.k-MessagesMenu__message__avatar{flex:0 0 ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-MessagesMenu__message__content{flex:1 0 calc(100% - pxToRem(15 + 30 + 2 + 10));}.k-MessagesMenu__message--unread{&::before{content:'';position:absolute;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:var(--color-primary-500);top:calc(50% - ", ");left:0;}}.k-MessagesMenu__message__closeButton{flex:0 0 ", ";transition:opacity var(--transition),margin-right var(--transition);margin-right:", ";opacity:0;}@media (hover:hover){.k-MessagesMenu__message:hover,.k-MessagesMenu__message:focus-within{.k-MessagesMenu__message__closeButton{margin-right:", ";opacity:1;}}}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(-3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(15 + 10 + 30 + 10), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(55), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(-30 - 10), (0, _typography.pxToRem)(10));

const MessagesMenu = _ref => {
  let {
    className,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledMessagesMenu, (0, _extends2.default)({
    className: (0, _classnames.default)('k-MessagesMenu', className)
  }, props), children);
};

exports.MessagesMenu = MessagesMenu;

MessagesMenu.Message = _ref2 => {
  let {
    className,
    children,
    status = 'read',
    active,
    onClick,
    avatarProps = {},
    closeButtonProps = {},
    ...props
  } = _ref2;
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
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-MessagesMenu__message__content"
  }, children)), Object.keys(closeButtonProps).length > 0 && /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    rounded: true,
    fit: "icon",
    size: "micro",
    className: (0, _classnames.default)('k-MessagesMenu__message__closeButton', avatarProps.className)
  }, closeButtonProps), closeButtonProps.children || /*#__PURE__*/_react.default.createElement(_crossIconNext.CrossIconNext, null)));
};

MessagesMenu.Message.propTypes = {
  status: _propTypes.default.oneOf(['active', 'read', 'unread']),
  avatarProps: _propTypes.default.object,
  closeButtonProps: _propTypes.default.object
};