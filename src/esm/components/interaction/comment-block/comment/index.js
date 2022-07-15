import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text", "ownerName", "avatarImgProps", "commentDate", "footer", "headerActions", "id", "children", "className", "isSecondary", "isHighlighted"],
    _excluded2 = ["children", "accessibilityLabel", "hasLiked", "className", "disabled"];
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
var CommentWrapper = styled.div.withConfig({
  displayName: "comment__CommentWrapper",
  componentId: "sc-1wxubm3-0"
})(["--comment-arrow-size:", ";--comment-background-color:var(--color-grey-200);display:flex;gap:", ";padding:", ";border-radius:", ";flex-direction:column;position:relative;background-color:var(--comment-background-color);transition:background-color var(--transition);&.k-Comment--isSecondary{margin-left:", ";@media ", "{margin-left:", ";}}&.k-Comment--isHighlighted{--comment-background-color:var(--color-grey-400);.k-Comment__header__meta{color:var(--color-grey-700);}}&::before{content:'';width:0;height:0;position:absolute;left:calc(-1 * var(--comment-arrow-size));top:calc(50% - var(--comment-arrow-size));border:var(--comment-arrow-size) solid transparent;border-left:0;border-right-color:var(--comment-background-color);transition:border-right-color var(--transition);}.k-Comment__header{display:flex;gap:", ";align-items:center;justify-content:space-between;font-size:", ";}.k-Comment__header__meta{display:flex;gap:", ";align-items:center;color:var(--color-grey-600);}.k-Comment__header__image{display:block;width:", ";height:", ";overflow:hidden;object-fit:cover;object-position:center center;border-radius:", ";}.k-Comment__header__actions{display:flex;gap:", ";}.k-Comment__content{", " font-size:", ";}.k-Comment__footer{display:flex;gap:", ";}.k-Comment-LikeButton{display:flex;gap:", ";align-items:center;color:var(--color-grey-900);transition:color var(--transition);:disabled{cursor:not-allowed;opacity:0.5;}&[aria-pressed]{svg{color:var(--color-danger-500);}}svg{max-width:", ";max-height:", ";transition:inherit;}:not(:disabled):hover{color:var(--color-primary-700);}}"], pxToRem(7), pxToRem(10), pxToRem(15), pxToRem(6), pxToRem(20), mq.tabletAndDesktop, pxToRem(50), pxToRem(10), pxToRem(12), pxToRem(5), pxToRem(20), pxToRem(20), pxToRem(20), pxToRem(10), TYPOGRAPHY.fontStyles['400'], pxToRem(14), pxToRem(10), pxToRem(5), pxToRem(14), pxToRem(14));
export var Comment = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var text = _ref.text,
      ownerName = _ref.ownerName,
      avatarImgProps = _ref.avatarImgProps,
      commentDate = _ref.commentDate,
      footer = _ref.footer,
      headerActions = _ref.headerActions,
      id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      isSecondary = _ref.isSecondary,
      isHighlighted = _ref.isHighlighted,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(CommentWrapper, _extends({
    ref: ref || null,
    id: id,
    className: classNames('k-Comment', className, {
      'k-Comment--isSecondary': isSecondary,
      'k-Comment--isHighlighted': isHighlighted
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Comment__header__meta"
  }, /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, avatarImgProps, {
    className: "k-Comment__header__image"
  })), /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    color: "font1",
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
  }, footer));
});

Comment.LikeButton = function (_ref2) {
  var children = _ref2.children,
      accessibilityLabel = _ref2.accessibilityLabel,
      hasLiked = _ref2.hasLiked,
      className = _ref2.className,
      disabled = _ref2.disabled,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
  ownerUrl: deprecated(PropTypes.string, 'Not used anymore'),
  avatarImgProps: PropTypes.object,
  commentDate: PropTypes.string,
  headerActions: PropTypes.node,
  footer: PropTypes.node,
  bottomNotes: deprecated(PropTypes.node, 'Please use footer prop instead'),
  text: deprecated(PropTypes.node, 'Please use children prop instead'),
  likeButtonProps: deprecated(PropTypes.object, 'Please use headerActions={<Comment.LikeButton />} instead'),
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