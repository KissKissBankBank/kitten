import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'

export class VerticalCard extends Component {
  static propTypes = {
    imageProps: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      style: PropTypes.object,
    }).isRequired,
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    description: PropTypes.string,
    descriptionTag: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      style: {},
    },
    titleTag: 'h1',
    description: '',
    descriptionTag: 'p',
  }

  render() {
    const {
      imageProps,
      title,
      titleTag,
      description,
      descriptionTag,
      ...others
    } = this.props

    return (
      <StyleRoot {...others}>
        <Marger bottom="3">{this.renderImage()}</Marger>
        <Marger top="3">{this.renderDescription()}</Marger>
      </StyleRoot>
    )
  }

  renderImage() {
    const { style, ...imageProps } = this.props.imageProps

    return <img {...imageProps} style={{ ...style, ...styles.image }} />
  }

  renderDescription() {
    const { title, titleTag, description, descriptionTag } = this.props

    return (
      <div>
        <Marger bottom={description ? 1 : 0}>
          <Title
            modifier="senary"
            tag={titleTag}
            margin={false}
            style={styles.text}
          >
            {title}
          </Title>
        </Marger>
        {description && (
          <Marger top="1">
            <Paragraph
              modifier="quaternary"
              tag={descriptionTag}
              margin={false}
              style={styles.text}
            >
              {description}
            </Paragraph>
          </Marger>
        )}
      </div>
    )
  }
}

const styles = {
  image: {
    width: '100%',
    display: 'block',
  },

  text: {
    textAlign: 'center',
    color: COLORS.font1,
  },
}
