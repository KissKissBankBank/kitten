import React from 'react'
import { Button } from '../../../../components/molecules/buttons/button'
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon'

export const CloseButton = ({
  closeButtonLabel,
  buttonModifier,
  ...others
}) => (
  <Button
    icon
    type="button"
    title={closeButtonLabel}
    aria-label={closeButtonLabel}
    modifier={buttonModifier}
    {...others}
  >
    <CrossIcon width="8" height="8" />
  </Button>
)

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
}
