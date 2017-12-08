import React, { Component } from 'react'
import classNames from 'classnames'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

export class CloseButton extends Component {
  render() {
    const {
      className,
      closeButtonLabel,
      size,
      modifier,
      ...others,
    } = this.props

    const buttonClassName = classNames(
      'k-ButtonIcon',
      'k-ButtonIcon--cross',
      {
        [`k-ButtonIcon--${modifier}`]: modifier,
        [`k-ButtonIcon--cross--${size}`]: size,
      },
      className,
    )

    return (
      <ButtonIcon
       className={ buttonClassName }
        title={ closeButtonLabel }
        aria-label={ closeButtonLabel }
        { ...others }
      >
        <CrossIcon
          className={ classNames('k-ButtonIcon__svg',
                                 'k-ButtonIcon__svgRotate') }
        />
      </ButtonIcon>
    )
  }
}

CloseButton.defaultProps = {
  closeButtonLabel: "Close",
  modifier: "hydrogen",
  size: null,
}
