import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { ButtonImage } from '../../../components/buttons/button-image'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const buttonImgHuge = pxToRem(80)
const buttonImgBig = pxToRem(50)

const StyledButtonImage = styled(ButtonImage)`
  border-radius: 50%;
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
        <Marger bottom="1" style={{ position: 'relative' }}>
          {this.renderBadge()}
          <StyledButtonImage
            tag="span"
            withoutPointerEvents
            img={avatarImgProps}
          />
        </Marger>
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
      <Text size="micro" weight="light" color="font1">
        {commentDate}
      </Text>
    )
  }
}
