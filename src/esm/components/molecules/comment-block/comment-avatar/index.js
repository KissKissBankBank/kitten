import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonImage } from '../../../../components/molecules/buttons/button-image';
import { Text } from '../../../../components/atoms/typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
var StyledAvatar = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatar",
  componentId: "sc-54iqa-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
var StyledPosition = styled.div.withConfig({
  displayName: "comment-avatar__StyledPosition",
  componentId: "sc-54iqa-1"
})(["position:relative;margin-bottom:", ";"], pxToRem(10));
var buttonImgHuge = pxToRem(80);
var buttonImgBig = pxToRem(50);
var StyledButtonImage = styled(ButtonImage).withConfig({
  displayName: "comment-avatar__StyledButtonImage",
  componentId: "sc-54iqa-2"
})(["border-radius:50%;height:", ";width:", ";@media (min-width:", "px){height:", ";width:", ";}"], buttonImgBig, buttonImgBig, ScreenConfig.S.min, buttonImgHuge, buttonImgHuge);
var StyledAvatarBadge = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatarBadge",
  componentId: "sc-54iqa-3"
})(["position:absolute;right:0;top:0;"]);
export var CommentAvatar = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(CommentAvatar, _PureComponent);

  function CommentAvatar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CommentAvatar.prototype;

  _proto.render = function render() {
    var avatarImgProps = this.props.avatarImgProps;
    return /*#__PURE__*/React.createElement(StyledAvatar, null, /*#__PURE__*/React.createElement(StyledPosition, null, this.renderBadge(), /*#__PURE__*/React.createElement(StyledButtonImage, {
      tag: "span",
      withoutPointerEvents: true,
      img: avatarImgProps
    })), this.renderDate());
  };

  _proto.renderBadge = function renderBadge() {
    var avatarBadge = this.props.avatarBadge;
    if (!avatarBadge) return;
    return /*#__PURE__*/React.createElement(StyledAvatarBadge, null, avatarBadge);
  };

  _proto.renderDate = function renderDate() {
    var commentDate = this.props.commentDate;
    if (!commentDate) return;
    return /*#__PURE__*/React.createElement(Text, {
      size: "micro",
      weight: "light",
      color: "font1"
    }, commentDate);
  };

  return CommentAvatar;
}(PureComponent);
CommentAvatar.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string,
  avatarBadge: PropTypes.node
};
CommentAvatar.defaultProps = {
  commentDate: '',
  avatarBadge: ''
};