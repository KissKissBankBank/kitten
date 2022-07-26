import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonImage } from '../../../action/button-image';
import { Text } from '../../../typography/text';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
const StyledAvatar = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatar",
  componentId: "sc-j9ccmz-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
const StyledPosition = styled.div.withConfig({
  displayName: "comment-avatar__StyledPosition",
  componentId: "sc-j9ccmz-1"
})(["position:relative;"]);
const buttonImgHuge = pxToRem(80);
const buttonImgBig = pxToRem(50);
const StyledButtonImage = styled(ButtonImage).withConfig({
  displayName: "comment-avatar__StyledButtonImage",
  componentId: "sc-j9ccmz-2"
})(["border-radius:var(--border-radius-rounded);height:", ";width:", ";@media (min-width:", "px){height:", ";width:", ";}"], buttonImgBig, buttonImgBig, ScreenConfig.S.min, buttonImgHuge, buttonImgHuge);
const StyledAvatarBadge = styled.div.withConfig({
  displayName: "comment-avatar__StyledAvatarBadge",
  componentId: "sc-j9ccmz-3"
})(["position:absolute;right:0;top:0;"]);
export class CommentAvatar extends PureComponent {
  render() {
    const {
      avatarImgProps
    } = this.props;
    return /*#__PURE__*/React.createElement(StyledAvatar, null, /*#__PURE__*/React.createElement(StyledPosition, null, this.renderBadge(), /*#__PURE__*/React.createElement(StyledButtonImage, {
      tag: "span",
      withoutPointerEvents: true,
      img: avatarImgProps
    })), this.renderDate());
  }

  renderBadge() {
    const {
      avatarBadge
    } = this.props;
    if (!avatarBadge) return;
    return /*#__PURE__*/React.createElement(StyledAvatarBadge, null, avatarBadge);
  }

  renderDate() {
    const {
      commentDate
    } = this.props;
    if (!commentDate) return;
    return /*#__PURE__*/React.createElement(Text, {
      size: "micro",
      weight: "400",
      color: "font1"
    }, commentDate);
  }

}
CommentAvatar.propTypes = {
  avatarImgProps: PropTypes.object.isRequired,
  commentDate: PropTypes.string,
  avatarBadge: PropTypes.node
};
CommentAvatar.defaultProps = {
  commentDate: '',
  avatarBadge: ''
};