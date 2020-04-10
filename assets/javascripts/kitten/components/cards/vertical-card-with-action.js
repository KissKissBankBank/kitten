import React, { Component } from 'react'
import { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger } from '../../components/layout/marger'
import { Title } from '../../components/typography/title'
import { Paragraph } from '../../components/typography/paragraph'
import { Button } from '../../components/buttons/button'
import COLORS from '../../constants/colors-config'

export class VerticalCardWithAction extends Component {
  static propTypes = {
    imageProps: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      style: PropTypes.shape({}),
    }).isRequired,
    title: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    description: PropTypes.string,
    descriptionTag: PropTypes.string,
    button: PropTypes.string.isRequired,
    buttonModifier: PropTypes.string,
    buttonProps: PropTypes.shape({
      onClick: PropTypes.func,
      href: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    imageProps: {
      style: {},
    },
    titleTag: 'h1',
    description: '',
    descriptionTag: 'p',
    buttonModifier: 'helium',
    buttonProps: {
      onClick: null,
      href: null,
    },
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
      buttonProps,
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
    const { style, ...imageProps } = this.props.imageProps

    return <img {...imageProps} style={{ ...style, ...styles.image }} />
  }

  renderDescription() {
    const { title, titleTag, description, descriptionTag } = this.props

    return (
      <div>
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
      </div>
    )
  }

  renderAction() {
    const { button, buttonModifier, buttonProps } = this.props
    const { onClick, href, ...others } = buttonProps

    return (
      <Button
        {...others}
        modifier={buttonModifier}
        type="button"
        onClick={onClick}
        href={href}
      >
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
