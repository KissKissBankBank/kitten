import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { ButtonImage } from '../../../components/buttons/button-image'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'
import { mediaQueries } from '../../../hoc/media-queries'

class CommentAvatarComponent extends Component {
  static propTypes = {
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string,
  }

  static defaultProps = {
    commentDate: '',
  }

  render() {
    const { avatarImgProps, viewportIsMobile } = this.props

    return (
      <div style={styles.avatar}>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge={!viewportIsMobile}
            big={viewportIsMobile}
            withoutPointerEvents
            img={avatarImgProps}
          />
        </Marger>

        {this.renderDate()}
      </div>
    )
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

const styles = {
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

export const CommentAvatar = mediaQueries(Radium(CommentAvatarComponent), {
  viewportIsMobile: true,
})
