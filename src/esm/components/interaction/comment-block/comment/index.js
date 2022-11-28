import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import deprecated from 'prop-types-extra/lib/deprecated';
import { Text } from '../../../typography/text';
import { mq } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { HeartIconNext } from '../../../graphics/icons-next/heart-icon-next';
const CommentWrapper = styled.div.withConfig({
  displayName: "comment__CommentWrapper",
  componentId: "sc-1wxubm3-0"
})(["--comment-background-color:var(--color-grey-200);display:flex;gap:", ";&.k-Comment--isSecondary{margin-left:", ";@media ", "{margin-left:", ";}.k-Comment__image{width:", ";height:", ";}}&.k-Comment--isHighlighted{--comment-background-color:var(--color-grey-400);.k-Comment__header__meta{color:var(--color-grey-700);}}.k-Comment__image{width:", ";height:", ";object-fit:cover;object-position:center center;border-radius:var(--border-radius-rounded);}.k-Comment__block{display:flex;gap:", ";padding:", ";border-radius:", ";flex-direction:column;position:relative;background-color:var(--comment-background-color);transition:background-color var(--transition);}.k-Comment__header{display:flex;gap:", ";align-items:center;justify-content:space-between;font-size:", ";}.k-Comment__header__meta{display:flex;gap:", ";align-items:center;color:var(--color-grey-600);}.k-Comment__header__actions{display:flex;gap:", ";}.k-Comment__content{", " font-size:", ";}.k-Comment__footer{display:flex;gap:", ";}.k-Comment-LikeButton{display:flex;gap:", ";align-items:center;color:var(--color-grey-900);transition:color var(--transition);:disabled{cursor:not-allowed;opacity:0.5;}&[aria-pressed]{svg{color:var(--color-danger-500);}}svg{max-width:", ";max-height:", ";transition:inherit;}:not(:disabled):hover{color:var(--color-primary-700);}}"], pxToRem(7), pxToRem(20), mq.tabletAndDesktop, pxToRem(50), pxToRem(20), pxToRem(20), pxToRem(40), pxToRem(40), pxToRem(10), pxToRem(15), pxToRem(8), pxToRem(10), pxToRem(12), pxToRem(5), pxToRem(10), TYPOGRAPHY.fontStyles['400'], pxToRem(14), pxToRem(10), pxToRem(5), pxToRem(14), pxToRem(14));
export const Comment = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    text,
    ownerName,
    avatarImgProps,
    commentDate,
    footer,
    headerActions,
    id,
    children,
    className,
    isSecondary,
    isHighlighted,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(CommentWrapper, _extends({
    ref: ref || null,
    id: id,
    className: classNames('k-Comment', className, {
      'k-Comment--isSecondary': isSecondary,
      'k-Comment--isHighlighted': isHighlighted
    })
  }, props), /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, avatarImgProps, {
    className: "k-Comment__image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__header__meta"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    color: "font1",
    size: "small",
    className: "k-u-ellipsis"
  }, ownerName), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    "aria-hidden": true
  }, "\u2022"), /*#__PURE__*/React.createElement(Text, {
    size: "micro",
    weight: "400"
  }, commentDate)), /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__header__actions"
  }, headerActions)), /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__content"
  }, !!text && /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    weight: "400",
    size: "small"
  }, text), children), footer && /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__footer"
  }, footer)));
});

Comment.LikeButton = _ref2 => {
  let {
    children,
    accessibilityLabel,
    hasLiked,
    className,
    disabled,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("button", _extends({
    role: "button",
    "aria-pressed": !!hasLiked || null,
    className: classNames('k-Comment-LikeButton', 'k-u-reset-button', 'k-u-link', className),
    disabled: disabled
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "k-u-a11y-visuallyHidden"
  }, accessibilityLabel), children, /*#__PURE__*/React.createElement(HeartIconNext, {
    "aria-hidden": "true",
    focusable: "false",
    color: "currentColor",
    bgColor: hasLiked ? 'currentColor' : 'transparent'
  }));
};

Comment.propTypes = {
  ownerName: PropTypes.string,
  avatarImgProps: PropTypes.object,
  commentDate: PropTypes.string,
  headerActions: PropTypes.node,
  footer: PropTypes.node,
  isSecondary: PropTypes.bool,
  isHighlighted: PropTypes.bool
};
Comment.defaultProps = {
  footer: null,
  ownerName: '',
  headerActions: null,
  avatarImgProps: {},
  commentDate: '',
  isSecondary: false,
  isHighlighted: false
};
Comment.LikeButton.defaultProps = {
  hasLiked: false
};
Comment.LikeButton.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  hasLiked: PropTypes.bool
};