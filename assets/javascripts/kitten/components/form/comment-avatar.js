import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Text as TextBase } from 'kitten/components/typography/text'
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Text = Radium(TextBase)

class CommentAvatarComponent extends Component {
  static PropTypes = {
    ownerName: PropTypes.string,
    ownerImgProps: PropTypes.object,
    ownerTime: PropTypes.string,
  }

  static defaultProps = {
    ownerImgProps: { src: 'https://placehold.it/80x80/caf4fe/caf4fe' },
    ownerName: 'Camille',
    ownerTime: '2 min',
  }

  render() {
    const {
      ownerImgProps,
      ownerName,
      ownerTime,
      viewportIsTabletOrLess,
      viewportIsMobile,
    } = this.props

    return (
      <StyleRoot style={styles.avatar}>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge
            withoutPointerEvents
            img={ownerImgProps}
          />
        </Marger>

        {!viewportIsTabletOrLess && (
          <Text size="tiny" weight="regular">
            {ownerName}
          </Text>
        )}

        <Text size="nano" weight="light">
          {ownerTime}
        </Text>
      </StyleRoot>
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
  viewportIsTabletOrLess: true,
})
