import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Marger } from '../../../components/layout/marger';
import { CommentAvatar } from '../../../components/comments/comment-avatar';
import { Text } from '../../../components/typography/text';
import { ScreenConfig } from '../../../constants/screen-config';
import COLORS from '../../../constants/colors-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { LikeButton } from './components/like-button';
import domElementHelper from '../../../helpers/dom/element-helper';
var desktopPadding = pxToRem(30);
var tabletAndMobilePadding = pxToRem(20);
var StyledContentText = styled(Text).withConfig({
  displayName: "comment__StyledContentText",
  componentId: "sc-8s8e85-0"
})(["font-size:", ";@media (min-width:", "px){font-size:", ";}"], stepToRem(-1), ScreenConfig.S.min, stepToRem(0));
var StyledCommentArrow = styled.span.withConfig({
  displayName: "comment__StyledCommentArrow",
  componentId: "sc-8s8e85-1"
})(["position:absolute;top:", ";display:block;width:0;height:0;border-width:", ";border-style:solid;border-color:transparent;border-right-color:", ";left:", ";@media (min-width:", "px){top:", ";}"], pxToRem(20), pxToRem(10), COLORS.background3, pxToRem(-20), ScreenConfig.S.min, pxToRem(35));
var StyledGrid = styled.div.withConfig({
  displayName: "comment__StyledGrid",
  componentId: "sc-8s8e85-2"
})(["display:flex;"]);
var StyledCommentContainer = styled.span.withConfig({
  displayName: "comment__StyledCommentContainer",
  componentId: "sc-8s8e85-3"
})(["position:relative;margin-left:", ";flex:1;@media (min-width:", "px){margin-left:", ";}"], pxToRem(20), ScreenConfig.S.min, pxToRem(35));
var StyledCommentContent = styled.div.withConfig({
  displayName: "comment__StyledCommentContent",
  componentId: "sc-8s8e85-4"
})(["border-width:", ";background-color:", ";border-color:", ";color:", ";font-size:", ";padding:", ";@media (min-width:", "px){padding-top:", ";padding-right:", ";padding-left:", ";}"], pxToRem(2), COLORS.background3, COLORS.background3, COLORS.font1, stepToRem(0), tabletAndMobilePadding, ScreenConfig.M.min, desktopPadding, desktopPadding, desktopPadding);
var StyledMargerText = styled.div.withConfig({
  displayName: "comment__StyledMargerText",
  componentId: "sc-8s8e85-5"
})(["", " ", ""], function (_ref) {
  var hasLikeButton = _ref.hasLikeButton;
  return hasLikeButton && css(["margin-bottom:", ";@media (min-width:", "px){margin-bottom:", ";}"], pxToRem(15), ScreenConfig.M.min, pxToRem(20));
}, function (_ref2) {
  var ownerName = _ref2.ownerName;
  return ownerName && css(["margin-top:", ";"], pxToRem(10));
});
var StyledBottomNotes = styled(Text).withConfig({
  displayName: "comment__StyledBottomNotes",
  componentId: "sc-8s8e85-6"
})(["padding-left:", ";margin-top:0;"], pxToRem(30));
var StyledLikeButtonBox = styled.div.withConfig({
  displayName: "comment__StyledLikeButtonBox",
  componentId: "sc-8s8e85-7"
})(["position:absolute;right:0;margin-top:", ";margin-right:", ";@media (min-width:", "px){margin-right:", ";}"], pxToRem(-20), pxToRem(20), ScreenConfig.M.min, pxToRem(30));
export var Comment = function Comment(_ref3) {
  var text = _ref3.text,
      ownerName = _ref3.ownerName,
      avatarImgProps = _ref3.avatarImgProps,
      commentDate = _ref3.commentDate,
      bottomNotes = _ref3.bottomNotes,
      likeButtonProps = _ref3.likeButtonProps,
      avatarBadge = _ref3.avatarBadge,
      id = _ref3.id;
  var likeButtonElement = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      likeButtonWidth = _useState2[0],
      setLikeButtonWidth = _useState2[1];

  useEffect(function () {
    var marginLeftAndRight = 40;
    var elementWidth = domElementHelper.getComputedWidth(likeButtonElement.current);
    setLikeButtonWidth(elementWidth + marginLeftAndRight);
  }, []);
  return /*#__PURE__*/React.createElement(StyledGrid, {
    id: id
  }, /*#__PURE__*/React.createElement(CommentAvatar, {
    avatarImgProps: avatarImgProps,
    commentDate: commentDate,
    avatarBadge: avatarBadge
  }), /*#__PURE__*/React.createElement(StyledCommentContainer, null, /*#__PURE__*/React.createElement(StyledCommentContent, null, ownerName && /*#__PURE__*/React.createElement(Marger, {
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    size: "tiny",
    weight: "regular"
  }, ownerName)), /*#__PURE__*/React.createElement(StyledMargerText, {
    hasLikeButton: !!likeButtonProps.children,
    ownerName: ownerName
  }, /*#__PURE__*/React.createElement(StyledContentText, {
    color: "font1",
    weight: "light"
  }, text)), /*#__PURE__*/React.createElement(StyledCommentArrow, null)), likeButtonProps.children && /*#__PURE__*/React.createElement(StyledLikeButtonBox, {
    ref: likeButtonElement
  }, /*#__PURE__*/React.createElement(LikeButton, likeButtonProps)), bottomNotes && /*#__PURE__*/React.createElement(Marger, {
    top: ".5",
    style: {
      marginRight: likeButtonWidth
    }
  }, /*#__PURE__*/React.createElement(StyledBottomNotes, {
    tag: "div",
    color: "font1",
    size: "micro",
    weight: "bold"
  }, bottomNotes))));
};
Comment.propTypes = {
  text: PropTypes.node.isRequired,
  ownerName: PropTypes.string,
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string.isRequired,
  bottomNotes: PropTypes.node,
  likeButtonProps: PropTypes.object,
  avatarBadge: PropTypes.node
};
Comment.defaultProps = {
  bottomNotes: '',
  ownerName: '',
  likeButtonProps: {},
  avatarBadge: ''
};