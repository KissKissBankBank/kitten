import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { GarbageIcon as GarbageIconBase } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon as ButtonIconBase } from 'kitten/components/buttons/button-icon'

const ButtonIcon = Radium(ButtonIconBase)
const GarbageIcon = Radium(GarbageIconBase)

class KarlGarbageButtonComponent extends Component {
  static propTypes = {
    size: PropTypes.string,
    modifier: PropTypes.string,
    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    size: 'tiny',
    modifier: 'beryllium',
    isDisabled: null,
  }

  render() {
    const buttonIsHovered = Radium.getState(
      this.state,
      'button-garbage',
      ':hover',
    )
    const buttonIsFocused = Radium.getState(
      this.state,
      'button-garbage',
      ':focus',
    )
    const buttonIsActived = Radium.getState(
      this.state,
      'button-garbage',
      ':active',
    )

    const size = this.props.size
    const modifier = this.props.modifier
    const isDisabled = this.props.disabled

    return (
      <StyleRoot>
        <div key="button-garbage" style={styles.garbage}>
          <ButtonIcon
            type="button"
            title="Garbage Button"
            aria-label="Garbage Button"
            modifier={modifier}
            size={size}
            disabled={isDisabled}
          >
            <GarbageIcon
              key={`icon-${buttonIsHovered}`}
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
