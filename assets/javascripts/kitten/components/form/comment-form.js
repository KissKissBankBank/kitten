import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot, Style } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { CommentAvatar } from 'kitten/components/form/comment-avatar'
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

  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
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
          <GridCol col="2">
            <CommentAvatar />
          </GridCol>
          <GridCol col="10">{this.renderInput()}</GridCol>
        </Grid>
      </StyleRoot>
    )
  }

  renderInput() {
    const { inputName, isDisabled, placeholder, defaultValue } = this.props

    const styleInput = [
      styles.input.textarea,
      this.state.isFocused && styles.input.textarea.focus,
      isDisabled && styles.input.textarea.isDisabled,
    ]

    const styleArrow = [
      styles.input.arrow,
      this.state.isFocused && styles.input.arrow.focus,
    ]

    // const length = value ? valueLenght : 0

    // We are forced to duplicate <Style />, to avoid having space between the class and the pseudo-element.
    // https://github.com/FormidableLabs/radium/issues/243
    return (
      <Fragment>
        <Style
          scopeSelector=".k-CommentForm__input::-webkit-input-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-CommentForm__input:-moz-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-CommentForm__input::-moz-placeholder"
          rules={{ color: COLORS.font2 }}
        />
        <Style
          scopeSelector=".k-CommentForm__input:-ms-input-placeholder"
          rules={{ color: COLORS.font2 }}
        />

        <Marger bottom="2" style={styles.input}>
          <textarea
            className="k-CommentForm__input"
            style={styleInput}
            key="comment-form"
            name={inputName}
            disabled={isDisabled}
            placeholder={placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            {defaultValue}
          </textarea>
          <span style={styleArrow}>
            <span style={styles.input.arrow.before} />
          </span>
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
      ':focus': {},
      width: '100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      color: COLORS.font1,
      padding: '30px',
      fontSize: '16px',
      focus: inputHoveredAndFocused,

      isDisabled: {
        borderColor: COLORS.line1,
        color: COLORS.font2,
        backgroundColor: COLORS.line1,
      },
    },

    arrow: {
      position: 'absolute',
      top: '2rem',
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: '8px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.line1,
      left: '-1rem',
      focus: {
        borderRightColor: COLORS.line2,
      },
      before: {
        position: 'absolute',
        width: 0,
        height: 0,
        marginTop: '-8px',
        borderWidth: '8px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRightColor: 'white',
        left: '-5px',
      },
    },
  },

  button: {
    left: {
      marginRight: '10px',
    },
  },
}

export const CommentForm = mediaQueries(Radium(CommentFormComponent), {
  viewportIsMobile: true,
  viewportIsTabletOrLess: true,
})
