import React from 'react'
import { Button } from '../../../components/actions/button'
import { CrossIcon } from '../../../../components/visuals/icons/cross-icon'

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
    <CrossIcon width="8" height="8" />
  </Button>
)

CloseButton.defaultProps = {
  closeButtonLabel: 'Close',
  buttonModifier: 'hydrogen',
  borderRadius: 0,
}
