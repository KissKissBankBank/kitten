import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { card } from '../../hoc/card'
import COLORS from '../../../constants/colors-config'
import { Marger } from '../../../components/layout/marger'

class ImageCard extends PureComponent {
  static propTypes = {
    imageProps: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    avatarProps: propTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    ownerTitle: PropTypes.string,
    ownerDescription: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      backgroundColor: COLORS.line2,
      src: 'https://placehold.it/350x200/caf4fe/caf4fe',
      alt: '',
    },
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    ownerTitle: null,
    ownerDescription: null,
  }

  render() {
    const { alt, backgroundColor, color, ...imageProps } = this.props.imageProps

    const imageClassName = classNames('k-Card__image', imageProps.className)

    return (
      <Marger
        className="k-Card__imageContainer"
        style={{
          ...styles.imageContainer,
          backgroundColor: this.props.loading ? COLORS.line2 : backgroundColor,
        }}
      >
        {!this.props.loading && (
          <img
            {...imageProps}
            alt={alt || ''}
            className={imageClassName}
            style={{
              ...imageProps.style,
              ...styles.image,
              color,
            }}
          />
        )}
      </Marger>
    )
  }
}

export default ImageCard
