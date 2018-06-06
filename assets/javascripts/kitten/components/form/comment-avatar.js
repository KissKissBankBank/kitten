import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Text } from 'kitten/components/typography/text'
import COLORS from 'kitten/constants/colors-config'
import { mediaQueries } from 'kitten/hoc/media-queries'

class CommentAvatarComponent extends Component {
  static propTypes = {
    avatarImgProps: PropTypes.object.isRequired,
    commentDate: PropTypes.string,
  }

  static defaultProps = {
    commentDate: '',
  }

  render() {
    const { avatarImgProps, commentDate, viewportIsMobile } = this.props

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

        <Text size="micro" weight="light" color="font1">
          {commentDate}
        </Text>
      </div>
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
