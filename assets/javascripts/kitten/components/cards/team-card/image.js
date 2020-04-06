import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Marger } from '../../layout/marger'
import COLORS from '../../../constants/colors-config'

export class TeamCardImage extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const { src, title } = this.props
    return (
      <Marger bottom="2">
        <div style={imgBackground(src)} title={title} />
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
  paddingBottom: (imageHeight / imageWidth) * 100 + '%',
})
