import React from 'react'
import { Button } from '../../../components/buttons/button'
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
    size={size}
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
