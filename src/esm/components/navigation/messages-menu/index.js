import _extends from "@babel/runtime/helpers/extends";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Button } from '../../../components/action/button';
import { CrossIconNext } from '../../../components/graphics/icons-next/cross-icon-next';
const StyledMessagesMenu = styled.ul.withConfig({
  displayName: "messages-menu__StyledMessagesMenu",
  componentId: "sc-1riahy-0"
})(["display:flex;flex-direction:column;gap:", ";list-style:none;margin:0;padding:0;overflow:scroll;height:100%;margin-left:", ";padding-left:", ";.k-MessagesMenu__message{overflow:hidden;position:relative;flex:0 0 auto;margin:0;padding:0;display:flex;gap:", ";align-items:center;margin-left:", ";padding-left:", ";transition:width var(--transition);}.k-MessagesMenu__message--unread .k-MessagesMenu__message__button{background-color:var(--color-primary-100);}.k-MessagesMenu__message--active .k-MessagesMenu__message__button{background-color:var(--color-grey-300);}.k-MessagesMenu__message__button:hover,.k-MessagesMenu__message__button:active{background-color:var(--color-grey-200);}.k-MessagesMenu__message__button{display:flex;flex:1 0 calc(100% - ", ");gap:", ";align-items:center;height:", ";padding-block:", ";padding-inline:", " ", ";transition:background-color var(--transition);border-radius:var(--border-radius-m);outline-offset:", ";}.k-MessagesMenu__message__avatar{flex:0 0 ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);object-fit:cover;object-position:center;border:var(--border-width) solid var(--color-grey-300);}.k-MessagesMenu__message__content{flex:1 0 calc(100% - pxToRem(15 + 30 + 2 + 10));}.k-MessagesMenu__message--unread{&::before{content:'';position:absolute;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:var(--color-primary-500);top:calc(50% - ", ");left:0;}}.k-MessagesMenu__message__closeButton{flex:0 0 ", ";transition:opacity var(--transition),margin-right var(--transition);margin-right:", ";opacity:0;}@media (hover:hover){.k-MessagesMenu__message:hover,.k-MessagesMenu__message:focus-within{.k-MessagesMenu__message__closeButton{margin-right:", ";opacity:1;}}}"], pxToRem(5), pxToRem(-3), pxToRem(3), pxToRem(10), pxToRem(-3), pxToRem(3), pxToRem(15 + 10 + 30 + 10), pxToRem(10), pxToRem(55), pxToRem(10), pxToRem(15), pxToRem(10), pxToRem(-2), pxToRem(30), pxToRem(30), pxToRem(30), pxToRem(6), pxToRem(6), pxToRem(3), pxToRem(30), pxToRem(-30 - 10), pxToRem(10));
export const MessagesMenu = _ref => {
  let {
    className,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledMessagesMenu, _extends({
    className: classNames('k-MessagesMenu', className)
  }, props), children);
};

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
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-MessagesMenu__message__content"
  }, children)), Object.keys(closeButtonProps).length > 0 && /*#__PURE__*/React.createElement(Button, _extends({
    rounded: true,
    fit: "icon",
    size: "micro",
    className: classNames('k-MessagesMenu__message__closeButton', avatarProps.className)
  }, closeButtonProps), closeButtonProps.children || /*#__PURE__*/React.createElement(CrossIconNext, null)));
};

MessagesMenu.Message.propTypes = {
  status: PropTypes.oneOf(['active', 'read', 'unread']),
  avatarProps: PropTypes.object,
  closeButtonProps: PropTypes.object
};