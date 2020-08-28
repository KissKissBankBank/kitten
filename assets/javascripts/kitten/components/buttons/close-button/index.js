import React, { Component } from 'react'
import classNames from 'classnames'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { CrossIcon } from '../../../components/icons/cross-icon'

export class CloseButton extends Component {
  render() {
    const {
      className,
      closeButtonLabel,
      size,
      buttonModifier,
      ...others
    } = this.props

    const buttonClassName = classNames(
      'k-ButtonIcon--cross',
      { [`k-ButtonIcon--cross--${size}`]: size },
      className,
    )

    return (
      <ButtonIcon
        type="button"
        className={buttonClassName}
        title={closeButtonLabel}
        aria-label={closeButtonLabel}
        modifier={buttonModifier}
        {...others}
      >
        <CrossIcon
          className={classNames('k-ButtonIcon__svg', 'k-ButtonIcon__svgRotate')}
        />
      </ButtonIcon>
    )
  }
}

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  size: null,
}
