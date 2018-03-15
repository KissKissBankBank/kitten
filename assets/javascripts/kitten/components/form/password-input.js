import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import COLORS from 'kitten/constants/colors-config'
import { PasswordIcon as PasswordIconBase } from 'kitten/components/icons/password-icon'
import { TextInput as TextInputBase } from 'kitten/components/form/text-input'

const PasswordIcon = Radium(PasswordIconBase)
const TextInput = Radium(TextInputBase)

class PasswordInputBase extends Component {
  static propTypes = {
    textInputProps: PropTypes.object,
  }

  static defaultProps = {
    textInputProps: {},
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: true
    };
  }

  handleClick = () => {
    this.setState({ isHidden: !this.state.isHidden })
  }

  handleKeyDown = (event) => {
    const enterKeyCode = 13

    if (event.keyCode == enterKeyCode) {
      this.handleClick()
    }
  }

  render() {
    const { textInputProps } = this.props

    const type = this.state.isHidden ? 'password' : 'text'

    const iconStyle = [
      styles.icon.svg,
      !this.state.isHidden && styles.icon.svg.active,
    ]

    return (
      <div style={ styles.textInput }>
        <TextInput
          { ...textInputProps }
          style={ styles.input }
          name="password"
          type={ type }
        />
        <span style={ styles.icon }>
          <PasswordIcon
            tabIndex="0"
            style={ iconStyle }
            onClick={ this.handleClick }
            onKeyDown={ this.handleKeyDown }
          />
        </span>
      </div>
    )
  }
}

const styles = {
  textInput: {
    position: 'relative',
    display: 'flex',
  },

  input: {
    paddingRight: '40px',
  },

  icon: {
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    marginRight: '11px',
    right: 0,
    top: 0,
    bottom: 0,

    svg: {
      cursor: 'pointer',
      active: {
        fill: `${COLORS.primary1}`,
      },
    },
  },
}

export const PasswordInput = Radium(PasswordInputBase)
