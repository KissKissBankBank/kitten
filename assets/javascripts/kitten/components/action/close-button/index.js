import React from 'react'
import { Button } from '../../action/button'
import { CrossIconNext } from '../../graphics/icons-next/cross-icon-next'

export const CloseButton = ({
  closeButtonLabel,
  buttonModifier,
  ...others
}) => (
  <Button
    fit="icon"
    type="button"
    title={closeButtonLabel}
    aria-label={closeButtonLabel}
    modifier={buttonModifier}
    {...others}
  >
    <CrossIconNext width="20" height="20" />
  </Button>
)

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  borderRadius: 0,
}
