import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import Radium, { StyleRoot, Style } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from '../../../components/layout/marger'
import { CommentAvatar } from '../../../components/comments/comment-avatar'
import { ButtonImage } from '../../../components/buttons/button-image'
import { Button as ButtonBase } from '../../../components/buttons/button'
import { Text } from '../../../components/typography/text'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const Marger = Radium(MargerBase)
const Button = Radium(ButtonBase)

export class CommentForm extends Component {
  static propTypes = {
    avatarImgProps: PropTypes.object.isRequired,

    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,

    commentButton: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    onSubmit: PropTypes.func,
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
      height: 'auto',
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true })
  }

  handleBlur = () => {
    this.setState({ isFocused: false })
  }

  handleChange = e => {
    const element = e.target

    this.setState(
      {
        value: element.value,
        height: 'auto',
      },
      () => {
        this.setState({
          height: element.scrollHeight,
        })
      },
    )
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  render() {
    const { avatarImgProps } = this.props

    return (
      <StyleRoot>
        <div style={styles.grid}>
          <CommentAvatar avatarImgProps={avatarImgProps} />
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
      { height: this.state.height },
    ]

    const styleArrow = [
      styles.input.arrow,
      error && styles.input.arrow.error,
      this.state.isFocused && styles.input.arrow.focus,
    ]

    const textareaClassNames = classNames(
      'k-CommentForm__input',
      'k-u-weight-light',
    )

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
              className={textareaClassNames}
              style={styleInput}
              defaultValue={defaultValue}
              key="comment-form"
              disabled={isDisabled}
              placeholder={placeholder}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              rows="1"
            />
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
      overflowY: 'hidden',
      resize: 'none',
      boxSizing: 'border-box',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: COLORS.line1,
      color: COLORS.font1,
      padding: 30,
      fontSize: 14,
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        fontSize: 16,
      },
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
      top: 20,
      display: 'block',
      width: 0,
      height: 0,
      borderWidth: 10,
      borderStyle: 'solid',
      borderColor: 'transparent',
      borderRightColor: COLORS.line1,
      left: -20,
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        top: 35,
      },

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
        marginTop: -10,
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderRightColor: 'white',
        left: -7,
      },
    },
  },

  button: {
    left: {
      marginRight: 10,
    },
  },
}
