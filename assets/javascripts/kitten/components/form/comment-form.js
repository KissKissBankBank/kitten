import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot, Style } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { Text as TextBase } from 'kitten/components/typography/text'
import { mediaQueries } from 'kitten/hoc/media-queries'
import COLORS from 'kitten/constants/colors-config'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Marger = Radium(MargerBase)
const Button = Radium(ButtonBase)
const Text = Radium(TextBase)

class CommentFormComponent extends Component {
  static PropTypes = {
    ownerName: PropTypes.string.isRequired,
    ownerImgProps: PropTypes.object.isRequired,
    ownerTime: PropTypes.string.isRequired,

    inputName: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,

    cancelButton: PropTypes.string,
    commentButton: PropTypes.string,
  }

  static defaultProps = {
    isDisabled: false,

    cancelButton: '',
    commentButton: '',
  }

  render() {
    const {
      ownerImgProps,
      ownerName,
      ownerTime,
      inputName,
      isDisabled,
      placeholder,
      cancelButton,
      commentButton,
      deleteButton,
      signalButton,
      viewportIsMobile,
      viewportIsTabletOrLess,
      ...others
    } = this.props

    return (
      <StyleRoot>
        <Grid>
          <GridCol col="2">{this.renderOwner()}</GridCol>
          <GridCol col="10">{this.renderInput()}</GridCol>
        </Grid>
      </StyleRoot>
    )
  }

  renderOwner() {
    const {
      ownerImgProps,
      ownerName,
      ownerTime,
      viewportIsTabletOrLess,
      viewportIsMobile,
    } = this.props

    return (
      <Fragment>
        <Marger bottom="1">
          <ButtonImage
            tag="span"
            huge
            withoutPointerEvents
            img={ownerImgProps}
          />
        </Marger>

        {!viewportIsTabletOrLess && (
          <Marger top="1">
            <Text size="tiny" weight="regular">
              {ownerName}
            </Text>
          </Marger>
        )}

        <Text size="nano" weight="light">
          {ownerTime}
        </Text>
      </Fragment>
    )
  }

  renderInput() {
    const { inputName, isDisabled, placeholder } = this.props

    const styleInput = [
      styles.input.textarea,
      isDisabled && styles.input.textarea.isDisabled,
    ]

    const buttonIsFocused = Radium.getState(this.state, 'button-form', ':focus')

    // We are forced to duplicate <Style />, to avoid having space between the class and the pseudo-element.
    // https://github.com/FormidableLabs/radium/issues/243
    return (
      <Fragment>
        <Style
          scopeSelector=".k-Comment__input::-webkit-input-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-Comment__input:-moz-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-Comment__input::-moz-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-Comment__input:-ms-input-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Marger bottom="2" style={styles.input}>
          <textarea
            key="button-form"
            className="k-Comment__input"
            style={styleInput}
            name={inputName}
            disabled={isDisabled}
            placeholder={placeholder}
          />
          <span style={styles.input.textarea.arrow} />
        </Marger>
      </Fragment>
    )
  }

  renderButton() {
    const { commentButton, cancelButton } = this.props

    return (
      <Marger top="2">
        <Button modifier="helium" style={styles.button.left}>
          {commentButton}
        </Button>
        <Button modifier="lithium">{cancelButton}</Button>
      </Marger>
    )
  }
}

const inputHoveredAndFocused = {
  outline: 'none',
  borderColor: COLORS.line2,
}
const notificationHoveredAndFocused = {
  color: COLORS.primary1,
}

const styles = {
  input: {
    position: 'relative',
    display: 'flex',

    textarea: {
      width: '100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      color: COLORS.font1,
      padding: '30px',
      fontSize: '16px',
      ':hover': inputHoveredAndFocused,
      ':focus': inputHoveredAndFocused,

      arrow: {
        position: 'absolute',
        left: '8rem',
        display: 'block',
        width: 0,
        height: 0,
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: COLORS.line1,
        top: '-1rem',
      },

      isDisabled: {
        borderColor: COLORS.line1,
        color: COLORS.font2,
        backgroundColor: COLORS.line1,
      },
    },
  },

  button: {
    left: {
      marginRight: '10px',
    },
  },

  notification: {
    marginLeft: '30px',
    link: {
      color: COLORS.font1,

      ':hover': notificationHoveredAndFocused,
      ':focus': notificationHoveredAndFocused,
      ':active': {
        color: COLORS.primary3,
      },

      left: {
        marginRight: '15px',
      },
    },
  },
}

export const CommentForm = mediaQueries(Radium(CommentFormComponent), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true,
})
