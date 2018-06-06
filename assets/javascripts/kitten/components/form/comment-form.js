import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot, Style } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { CommentAvatar } from 'kitten/components/form/comment-avatar'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { Text as TextBase } from 'kitten/components/typography/text'
import { ScreenConfig } from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'

const Marger = Radium(MargerBase)
const Button = Radium(ButtonBase)
const Text = Radium(TextBase)

export class CommentForm extends Component {
  static PropTypes = {
    avatarImgProps: PropTypes.object.isRequired,

    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,

    commentButton: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.object,
    defaultValue: PropTypes.string,
  }

  static defaultProps = {
    onSubmit: () => {},
    error: false,
    errorMessage: '',
    isDisabled: false,
    commentButton: '',
    defaultValue: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      value: this.props.defaultValue,
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  render() {
    const { avatarProps } = this.props

    return (
      <StyleRoot>
        <div style={styles.grid}>
          <CommentAvatar avatarImgProps={avatarProps} />
          {this.renderInput()}
        </div>
      </StyleRoot>
    )
  }

  renderInput() {
    const {
      isDisabled,
      placeholder,
      defaultValue,
      error,
      errorMessage,
    } = this.props

    const styleInput = [
      styles.input.textarea,
      error && styles.input.textarea.error,
      this.state.isFocused && styles.input.textarea.focus,
      isDisabled && styles.input.textarea.isDisabled,
    ]

    const styleArrow = [
      styles.input.arrow,
      error && styles.input.arrow.error,
      this.state.isFocused && styles.input.arrow.focus,
    ]

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

        <div style={styles.grid.col}>
          <Marger bottom=".5" style={styles.input}>
            <textarea
              className="k-CommentForm__input"
              style={styleInput}
              key="comment-form"
              disabled={isDisabled}
              placeholder={placeholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              rows="3"
            >
              {defaultValue}
            </textarea>
            <span style={styleArrow}>
              <span style={styles.input.arrow.before} />
            </span>
          </Marger>
          {this.renderError()}
          {this.renderButton()}
        </div>
      </Fragment>
    )
  }

  renderButton() {
    if (!this.state.value) return

    const { commentButton } = this.props

    return (
      <Marger top="2">
        <Button
          type="button"
          modifier="helium"
          onClick={this.handleSubmit}
          style={styles.button.left}
        >
          {commentButton}
        </Button>
      </Marger>
    )
  }

  renderError() {
    const { error, errorMessage } = this.props

    if (!error) return

    return (
      <Marger top=".5">
        <Text color="error" size="micro" weight="regular">
          {errorMessage}
        </Text>
      </Marger>
    )
  }
}

const styles = {
  grid: {
    display: 'flex',
    col: {
      flex: 1,
      marginLeft: 20,
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        marginLeft: 35,
      },
    },
  },

  input: {
    display: 'flex',
    position: 'relative',

    textarea: {
      width: '100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      color: COLORS.font1,
      padding: '30px',
      fontSize: '16px',
      focus: {
        outline: 'none',
        borderColor: COLORS.line2,
        color: COLORS.font1,
      },

      isDisabled: {
        borderColor: COLORS.line1,
        color: COLORS.font2,
        backgroundColor: COLORS.line1,
      },
      error: {
        borderColor: COLORS.error3,
        color: COLORS.error3,
      },
    },

    arrow: {
      position: 'absolute',
      top: '30px',
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: '10px',
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.line1,
      left: '-20px',
      focus: {
        borderRightColor: COLORS.line2,
      },
      error: {
        borderRightColor: COLORS.error3,
      },
      before: {
        position: 'absolute',
        width: 0,
        height: 0,
        marginTop: '-10px',
        borderWidth: '10px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRightColor: 'white',
        left: '-7px',
      },
    },
  },

  button: {
    left: {
      marginRight: '10px',
    },
  },
}
