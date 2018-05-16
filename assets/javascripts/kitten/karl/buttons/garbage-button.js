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
    const size = this.props.size
    const modifier = this.props.modifier
    const isDisabled = this.props.disabled

    return (
      <ButtonIcon
        type="button"
        title="Garbage Button"
        aria-label="Garbage Button"
        modifier={modifier}
        size={size}
        disabled={isDisabled}
      >
        <GarbageIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }
}

export const KarlGarbageButton = Radium(KarlGarbageButtonComponent)
