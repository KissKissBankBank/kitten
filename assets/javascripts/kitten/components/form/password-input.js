import React, { Component, Fragment } from 'react'
import { PasswordIcon as PasswordIconBase } from 'kitten/components/icons/password-icon'
import { TextInput as TextInputBase } from 'kitten/components/form/text-input'
import Radium, { StyleRoot } from 'radium'
import COLORS from 'kitten/constants/colors-config'

const PasswordIcon = Radium(PasswordIconBase)
const TextInput = Radium(TextInputBase)

export class PasswordInput extends Component {
  render() {
    return (
      <Fragment>
        { this.renderPassword() }
      </Fragment>
    )
  }

  renderPassword() {
    const iconIsHovered =
      Radium.getState(this.state, 'password-input', ':hover')
    const iconIsFocused =
      Radium.getState(this.state, 'password-input', ':focus')
    const iconIsActived =
      Radium.getState(this.state, 'password-input', ':active')

    return (
      <div
        key="password-input"
        style={ styles.textInput }>
        <TextInput
          style={ styles.input }
          name="password"
          type="password"
        />
        <span
          style={ styles.password }
        >
          <PasswordIcon
            key={ `icon-${iconIsHovered}` }
            style={ styles.password.icon }
          />
        </span>
      </div>
    )
  }
}

const styles = {
  textInput: {
    position: 'relative',
    ':hover': {},
    ':focus': {},
    ':active': {},
  },

  input: {
    paddingRight: '40px',
  },

  password: {
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 1,
    margin: '14px 11px',
    right: 0,
    top: 0,

    icon: {
      ':hover': {
        fill: `${COLORS.primary1}`,
      },
      ':active': {
        fill: `${COLORS.primary1}`,
      },
    },
  },
}
