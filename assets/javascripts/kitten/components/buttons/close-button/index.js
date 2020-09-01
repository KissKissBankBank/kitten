import React from 'react'
import { Button } from '../../../components/buttons/button/button'
import { CrossIcon } from '../../../components/icons/cross-icon'

export const CloseButton = ({
  closeButtonLabel,
  size,
  buttonModifier,
  ...others
}) => (
  <Button
    icon
    type="button"
    title={closeButtonLabel}
    aria-label={closeButtonLabel}
    modifier={buttonModifier}
    tiny={size === 'tiny'}
    big={size === 'big'}
    {...others}
  >
    <CrossIcon width="8" height="8" />
  </Button>
)

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  size: null,
}
