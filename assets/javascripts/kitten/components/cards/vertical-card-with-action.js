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
    titleDescription: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    textDescription: PropTypes.string,
    textTag: PropTypes.string,
    button: PropTypes.string.isRequired,
    buttonModifier: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      src: '',
      alt: '',
    },
    titleTag: 'h1',
    textDescription: '',
    textTag: 'p',
    buttonModifier: 'helium',
  }

  render() {
    const {
      imageProps,
      titleDescription,
      titleTag,
      textDescription,
      textTag,
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
    if (!this.props.imageProps.src) return

    return (
      <div>
        <img {...this.props.imageProps} style={styles.image} />
      </div>
    )
  }

  renderDescription() {
    const { titleDescription, titleTag, textDescription, textTag } = this.props

    return (
      <Fragment>
        <Marger bottom={textDescription ? 1.5 : 0}>
          <Title
            modifier="senary"
            tag={titleTag}
            margin={false}
            style={styles.text}
          >
            {titleDescription}
          </Title>
        </Marger>
        {textDescription && (
          <Marger top="1.5">
            <Paragraph
              modifier="quaternary"
              tag={textTag}
              margin={false}
              style={styles.text}
            >
              {textDescription}
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
