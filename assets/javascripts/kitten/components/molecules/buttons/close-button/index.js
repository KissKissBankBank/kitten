import React from 'react'
import { Button } from '../../../../components/molecules/buttons/button'
import { CrossIcon } from '../../../../components/graphics/icons/cross-icon'
import COLORS from '../../../../constants/colors-config'

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
    <CrossIcon width="8" height="8" color={COLORS.font1} />
  </Button>
)

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  variant: 'andromeda',
}
