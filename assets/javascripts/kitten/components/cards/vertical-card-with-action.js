import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Button } from 'kitten/components/buttons/button'
import COLORS from 'kitten/constants/colors-config'

export class VerticalCardWithAction extends Component {
  static propTypes = {
    imageProps: PropTypes.object,
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    description: PropTypes.string,
    descriptionTag: PropTypes.string,
    button: PropTypes.string.isRequired,
    buttonModifier: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      src: '',
      alt: '',
    },
    titleTag: 'h1',
    description: '',
    descriptionTag: 'p',
    buttonModifier: 'helium',
  }

  render() {
    const {
      imageProps,
      title,
      titleTag,
      description,
      descriptionTag,
      button,
      buttonModifier,
      ...others
    } = this.props

    return (
      <StyleRoot {...others}>
        <Marger bottom="3">{this.renderImage()}</Marger>
        <Marger top="3" bottom="3">
          {this.renderDescription()}
        </Marger>
        <Marger top="3" style={styles.button}>
          {this.renderAction()}
        </Marger>
      </StyleRoot>
    )
  }

  renderImage() {
    return <img {...this.props.imageProps} style={styles.image} />
  }

  renderDescription() {
    const { title, titleTag, description, descriptionTag } = this.props

    return (
      <Fragment>
        <Marger bottom={description ? 1.5 : 0}>
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
          <Marger top="1.5">
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
      </Fragment>
    )
  }

  renderAction() {
    const { button, buttonModifier } = this.props

    return (
      <Button modifier={buttonModifier} type="button" aria-label={button}>
        {button}
      </Button>
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

  button: {
    textAlign: 'center',
  },
}
