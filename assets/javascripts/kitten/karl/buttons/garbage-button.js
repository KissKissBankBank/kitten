import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { GarbageIcon } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

class KarlGarbageButtonComponent extends Component {
  static propTypes = {
    size: PropTypes.string,
    modifier: PropTypes.string,
    isDisabled: PropTypes.bool,
  }

  static defaultProps = {
    size: 'tiny',
    modifier: 'beryllium',
    isDisabled: false,
  }

  render() {
    const { size, modifier, isDisabled } = this.props

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
