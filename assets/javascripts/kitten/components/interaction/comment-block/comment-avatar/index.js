import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ButtonImage } from '../../../action/button-image'
import { Text } from '../../../typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPosition = styled.div`
  position: relative;
`

const buttonImgHuge = pxToRem(80)
const buttonImgBig = pxToRem(50)

const StyledButtonImage = styled(ButtonImage)`
  border-radius: var(--border-radius-rounded);
  height: ${buttonImgBig};
  width: ${buttonImgBig};

  @media (min-width: ${ScreenConfig.S.min}px) {
    height: ${buttonImgHuge};
    width: ${buttonImgHuge};
  }
`

const StyledAvatarBadge = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export class CommentAvatar extends PureComponent {
  static propTypes = {
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string,
    avatarBadge: PropTypes.node,
  }

  static defaultProps = {
    commentDate: '',
    avatarBadge: '',
  }

  render() {
    const { avatarImgProps } = this.props

    return (
      <StyledAvatar>
        <StyledPosition>
          {this.renderBadge()}
          <StyledButtonImage
            tag="span"
            withoutPointerEvents
            img={avatarImgProps}
          />
        </StyledPosition>
        {this.renderDate()}
      </StyledAvatar>
    )
  }

  renderBadge() {
    const { avatarBadge } = this.props

    if (!avatarBadge) return

    return <StyledAvatarBadge>{avatarBadge}</StyledAvatarBadge>
  }

  renderDate() {
    const { commentDate } = this.props

    if (!commentDate) return

    return (
      <Text size="micro" weight="400" color="font1">
        {commentDate}
      </Text>
    )
  }
}
