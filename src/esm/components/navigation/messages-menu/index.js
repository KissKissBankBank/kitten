import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "children", "status", "active", "onClick", "avatarProps"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledMessagesMenu = styled.ul.withConfig({
  displayName: "messages-menu__StyledMessagesMenu",
  componentId: "sc-1riahy-0"
})(["display:flex;flex-direction:column;gap:", ";list-style:none;margin:0;padding:0;overflow:scroll;height:100%;margin-left:", ";padding-left:", ";.k-MessagesMenu__message{position:relative;margin:0;padding:0;}.k-MessagesMenu__message--unread .k-MessagesMenu__message__button{background-color:var(--color-primary-100);}.k-MessagesMenu__message--active .k-MessagesMenu__message__button{background-color:var(--color-grey-300);}.k-MessagesMenu__message__button:hover,.k-MessagesMenu__message__button:active{background-color:var(--color-grey-200);}.k-MessagesMenu__message__button{display:flex;gap:", ";align-items:center;height:", ";padding-block:", ";padding-inline:", " ", ";transition:background-color var(--transition);border-radius:var(--border-radius-m);outline-offset:", ";}.k-MessagesMenu__message__avatar{flex:0 0 ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-MessagesMenu__message--unread{&::before{content:'';position:absolute;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:var(--color-primary-500);top:calc(50% - ", ");left:", ";}}"], pxToRem(5), pxToRem(-3), pxToRem(3), pxToRem(10), pxToRem(55), pxToRem(10), pxToRem(15), pxToRem(10), pxToRem(-2), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(6), pxToRem(6), pxToRem(3), pxToRem(-3));
export var MessagesMenu = function MessagesMenu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledMessagesMenu, _extends({
    className: classNames('k-MessagesMenu', className)
  }, props), children);
};

MessagesMenu.Message = function (_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      _ref2$status = _ref2.status,
      status = _ref2$status === void 0 ? 'read' : _ref2$status,
      active = _ref2.active,
      onClick = _ref2.onClick,
      avatarProps = _ref2.avatarProps,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: classNames('k-MessagesMenu__message', className, "k-MessagesMenu__message--" + status, {
      'k-MessagesMenu__message--active': active
    })
  }, props), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-MessagesMenu__message__button",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, avatarProps, {
    className: classNames('k-MessagesMenu__message__avatar', avatarProps.className)
  })), /*#__PURE__*/React.createElement("div", null, children)));
};

MessagesMenu.Message.propTypes = {
  status: PropTypes.oneOf(['active', 'read', 'unread'])
};