import React, { Component, Fragment } from 'react'
import { PasswordIcon as PasswordIconBase } from 'kitten/components/icons/password-icon'
import { TextInput as TextInputBase } from 'kitten/components/form/text-input'
import Radium, { StyleRoot } from 'radium'
import COLORS from 'kitten/constants/colors-config'

const PasswordIcon = Radium(PasswordIconBase)
const TextInput = Radium(TextInputBase)

export class PasswordInput extends Component {
  render() {
    const iconIsHovered =
      Radium.getState(this.state, 'password-input', ':hover')
    const iconIsFocused =
      Radium.getState(this.state, 'password-input', ':focus')
    const iconIsActived =
      Radium.getState(this.state, 'password-input', ':active')

    const isHidden =
    const isVisibled =
      !

    return (
      <StyleRoot>
        { this.renderPassword() }
      </StyleRoot>
    )
  }

  renderPassword() {
    return (
      <div
        key="password-input"
        style={ styles.textInput }>
        <a
          href="#"
          style={ styles.password }
        >
          <PasswordIcon
            key={ `icon-${iconIsHovered}` }
            style={ styles.password.icon }
          />
        </a>
        <div style={ styles.input }>
          <TextInput
            name="password"
            type="password"
          />
        </div>
      </div>
    )
  }
}

const styles = {
  textInput: {
    ':hover': {},
    ':focus': {},
    ':active': {},
  },

  password: {
    position: 'absolute',
    zIndex: 1,
    margin: '14px 11px',
    //right: 0,

    icon: {
      fill: `${COLORS.font1}`,
      ':hover': {
        fill: `${COLORS.primary1}`,
      },
      ':active': {
        fill: `${COLORS.primary1}`,
      },
    },
  },

  input: {
    position: 'relative',
  },

}
