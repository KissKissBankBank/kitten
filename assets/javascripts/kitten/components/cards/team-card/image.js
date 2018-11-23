import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'

export class TeamCardImage extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    imgTitle: PropTypes.string.isRequired,
  }

  render() {
    const { image, imgTitle } = this.props
    return (
      <Marger bottom="2">
        <div style={imgBackground(image)} title={imgTitle} />
      </Marger>
    )
  }
}

const imageHeight = 378
const imageWidth = 252

const imgBackground = image => ({
  backgroundImage: `url(${image})`,
  backgroundColor: COLORS.background1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: imageHeight / imageWidth * 100 + '%',
})
