import React from 'react'
import { InfoIcon } from 'kitten/components/icons/info-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

export const ButtonInfoIcon = props => (
  <ButtonIcon modifier="beryllium"
              size="micro">
    <InfoIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

ButtonInfoIcon.defaultProps = {
  type: 'button',
}
