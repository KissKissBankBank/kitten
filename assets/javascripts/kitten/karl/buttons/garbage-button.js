import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import classNames from 'classnames'
import { GarbageIcon as GarbageIconBase } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'
import COLORS from 'kitten/constants/colors-config'

const ButtonIcon = Radium(ButtonIconBase)
const GarbageIcon = Radium(GarbageIconBase)

class KarlGarbageButtonComponent extends Component {
  render() {
    const animateIsHovered = Radium.getState(
      this.state,
      'button-garbage',
      ':hover',
    )
    const animateIsFocused = Radium.getState(
      this.state,
      'button-garbage',
      ':focus',
    )
    const animateIsActived = Radium.getState(
      this.state,
      'button-garbage',
      ':active',
    )

    const isDisabled = this.props.disabled

    const isAnimated =
      !isDisabled && (animateIsHovered || animateIsFocused || animateIsActived)

    return (
      <StyleRoot>
        <div key="button-garbage" style={styles.garbage}>
          <ButtonIcon
            type="button"
            title="Garbage Button"
            aria-label="Garbage Button"
            modifier="beryllium"
            size="tiny"
            disabled={isDisabled}
          >
            <GarbageIcon
              key={`icon-${animateIsHovered}`}
              className="k-ButtonIcon__svg"
            />
          </ButtonIcon>
        </div>
      </StyleRoot>
    )
  }
}

const styles = {
  garbage: {
    ':hover': {},
    ':focus': {},
    ':active': {},
    ':disabled': {},
  },
}

export const KarlGarbageButton = Radium(KarlGarbageButtonComponent)
